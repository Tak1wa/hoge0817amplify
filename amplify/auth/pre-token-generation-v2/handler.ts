import type { PreTokenGenerationV2TriggerHandler } from 'aws-lambda';

export const handler: PreTokenGenerationV2TriggerHandler = async (event) => {
  event.response = {
    claimsAndScopeOverrideDetails: {
      accessTokenGeneration: {
        claimsToAddOrOverride: {
          "custom:tenant_id": event.request.userAttributes["custom:tenant_id"]
        }
      }
    }
  }

  return event;
};

