import { createParamDecorator, type ExecutionContext } from "@nestjs/common";
import type { Request } from "express";

import { getGraphqlRequest } from "../utils/gql-request.util";

export const UserAgent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    if (ctx.getType() === "http") {
      const request = ctx.switchToHttp().getRequest() as Request;

      return request.headers["user-agent"];
    }

    return getGraphqlRequest(ctx)?.headers?.["user-agent"];
  }
);
