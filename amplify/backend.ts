import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { preTokenGenerationV2 } from './auth/pre-token-generation-v2/resource';

const backend = defineBackend({
  auth,
  data,
  preTokenGenerationV2,
});

const { cfnUserPool } = backend.auth.resources.cfnResources
cfnUserPool.userPoolAddOns = {
  advancedSecurityMode: "AUDIT"
};
// const lambdaConfig = cfnUserPool.lambdaConfig as CfnUserPool.LambdaConfigProperty;
// cfnUserPool.lambdaConfig = {
//   preTokenGenerationConfig: {
//     lambdaVersion: 'V2_0',
//     lambdaArn: backend.preTokenGenerationV2.resources.lambda.functionArn,
//   }
// };
// cfnUserPool.addPropertyOverride("LambdaConfig.PreTokenGenerationConfig.LambdaVersion", "V2_0");
cfnUserPool.addPropertyOverride("LambdaConfig.PreTokenGenerationConfig",{
  LambdaVersion: 'V2_0',
  LambdaArn: backend.preTokenGenerationV2.resources.lambda.functionArn,
});

// const { cfnUserPool } = backend.auth.resources.cfnResources
// cfnUserPool.deletionProtection = "ACTIVE";

// const { amplifyDynamoDbTables } = backend.data.resources.cfnResources;
// for (const table of Object.values(amplifyDynamoDbTables)) {
//   table.deletionProtectionEnabled = true;
// }