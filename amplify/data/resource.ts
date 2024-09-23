import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { quicksightEmbed } from "../functions/quicksight-embed/resource";
import { hoge0918sync } from "../functions/hoge0918sync/resource";
import { hoge0918async } from "../functions/hoge0918async/resource";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  // Todo: a
  //   .model({
  //     content: a.string(),
  //   })
  //   .authorization((allow) => [allow.publicApiKey()]),
  Hoge: a
    .model({
      HogeContent: a.string(),
      HogeNum: a.integer()
    })
    .authorization((allow) => [allow.owner().identityClaim('custom:tenant_id')]),
    //.authorization((allow) => [allow.owner()])
    //.authorization((allow) => [allow.group('Admin')])
  quicksightEmbed: a
    .query()
    .returns(a.string())
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function(quicksightEmbed)),
  hoge0918sync: a
    .query()
    .handler(a.handler.function(hoge0918sync))
    .returns(a.string())
    .authorization((allow) => [allow.authenticated()]),
  hoge0918async: a
    .query()
    .handler(a.handler.function(hoge0918async).async())
    .authorization((allow) => [allow.authenticated()]),
  // HogeAi: a
  //   .ai.model("Claude 3 Haiku")
  //   .resou
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    //defaultAuthorizationMode: "apiKey",
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});