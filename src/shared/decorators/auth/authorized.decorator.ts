import { createParamDecorator, ExecutionContext } from "@nestjs/common";

import { User } from "@/prisma/generated";
import { getGraphqlRequest } from "@/src/shared/utils/gql-request.util";

export const Authorized = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    let user: User;

    if (ctx.getType() === "http") {
      user = ctx.switchToHttp().getRequest().user;
    } else {
      user = getGraphqlRequest(ctx)?.user as User;
    }
    return data ? user[data] : user;
  }
);
