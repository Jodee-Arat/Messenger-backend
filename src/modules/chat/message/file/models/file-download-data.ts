import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class FileDownloadData {
  @Field(() => String)
  filename: string;
  @Field(() => String)
  fileUrl: string;
}
