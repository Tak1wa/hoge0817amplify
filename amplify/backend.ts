import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { quicksightEmbed } from './functions/quicksight-embed/resource';

import * as iam from "aws-cdk-lib/aws-iam"

const backend = defineBackend({
  auth,
  data,
  quicksightEmbed,
});

const statement = new iam.PolicyStatement({
  sid: "AllowHogeQuickSight",
  actions: ["quicksight:GenerateEmbedUrlForRegisteredUser"],
  resources: ["arn:aws:quicksight:ap-northeast-1:550669467088:user/default/cm-iwasa.takahito/cm-iwasa.takahito"],
})
const quicksightEmbedLambda = backend.quicksightEmbed.resources.lambda;
quicksightEmbedLambda.addToRolePolicy(statement)