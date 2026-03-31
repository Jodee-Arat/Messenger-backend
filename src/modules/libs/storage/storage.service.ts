import {
  GetObjectCommand,
  GetObjectCommandInput,
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class StorageService {
  private readonly client: S3Client;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    this.client = new S3Client({
      endpoint: this.configService.getOrThrow<string>("S3_ENDPOINT"),
      region: this.configService.getOrThrow<string>("S3_REGION"),
      credentials: {
        accessKeyId: this.configService.getOrThrow<string>("S3_ACCESS_KEY_ID"),
        secretAccessKey: this.configService.getOrThrow<string>(
          "S3_SECRET_ACCESS_KEY"
        )
      }
    });
    this.bucket = this.configService.getOrThrow<string>("S3_BUCKET_NAME");
  }

  async upload(buffer: Buffer, key: string, mimetype: string) {
    const command: PutObjectCommandInput = {
      Bucket: this.bucket,
      Key: String(key),
      Body: buffer,
      ContentType: mimetype
    };
    try {
      await this.client.send(new PutObjectCommand(command));
    } catch (error) {
      throw error;
    }
  }
  async remove(key: string) {
    const command: DeleteObjectCommandInput = {
      Bucket: this.bucket,
      Key: key
    };
    try {
      await this.client.send(new DeleteObjectCommand(command));
    } catch (error) {
      throw error;
    }
  }

  async download(key: string) {
    const command: GetObjectCommandInput = {
      Bucket: this.bucket,
      Key: key
    };

    try {
      const response = await this.client.send(new GetObjectCommand(command));
      if (!response.Body) {
        throw new Error("Storage object body is empty");
      }
      const chunks: Buffer[] = [];

      for await (const chunk of response.Body as AsyncIterable<Uint8Array>) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }

      return Buffer.concat(chunks);
    } catch (error) {
      throw error;
    }
  }

  async getPresignedUrl(key: string, expiresIn = 3600): Promise<string> {
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: key
    });
    return getSignedUrl(this.client, command, { expiresIn });
  }
}
