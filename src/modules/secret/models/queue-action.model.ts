// import { Field, ObjectType } from "@nestjs/graphql";

// import { QueueAction, QueueActionTypeEnum } from "@/prisma/generated";
// import { JsonValue } from "@/prisma/generated/runtime/library";

// @ObjectType()
// export class QueueActionModel implements QueueAction {
//   @Field(() => String)
//   id: string;

//   @Field(() => QueueActionTypeEnum)
//   action: QueueActionTypeEnum;

//   @Field(() => String, { nullable: true })
//   metadata: string | null;

//   @Field(() => String, { nullable: true })
//   description: string | null;

//   @Field(() => Date)
//   createdAt: Date;

//   @Field(() => Date)
//   updatedAt: Date;
// }
