import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Request } from "express";

type GraphqlRequest = Partial<Request> & {
  headers?: Record<string, string | string[] | undefined>;
  session?: {
    userId?: string;
  };
  user?: {
    id?: string;
    [key: string]: unknown;
  };
};

type GraphqlContextShape = {
  req?: GraphqlRequest;
  connection?: {
    context?: {
      req?: GraphqlRequest;
    };
  };
};

export function getGraphqlRequest(context: ExecutionContext) {
  const gqlContext = GqlExecutionContext.create(context);
  const requestContext = gqlContext.getContext<GraphqlContextShape>();

  return requestContext.req ?? requestContext.connection?.context?.req ?? null;
}
