import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileDownloadData {
  @Field(() => String)
  filename: string;

  @Field(() => String)
  mimetype: string;

  @Field(() => String)
  base64: string;

  @Field(() => [String])
  hash: string[];
}
