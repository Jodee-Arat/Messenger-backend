import { registerEnumType } from "@nestjs/graphql";

export enum SecretSessionPlatform {
  WEB = "WEB",
  MOBILE = "MOBILE"
}

registerEnumType(SecretSessionPlatform, {
  name: "SecretSessionPlatform"
});
