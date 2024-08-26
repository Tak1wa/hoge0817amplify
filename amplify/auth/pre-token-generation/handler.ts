import type { PreTokenGenerationTriggerHandler, PreTokenGenerationV2TriggerHandler } from 'aws-lambda';
import { env } from '$amplify/env/pre-sign-up';

export const handler: PreTokenGenerationTriggerHandler = async (event) => {
  event.response = {
    claimsOverrideDetails: {
      claimsToAddOrOverride: {
        my_first_attribute: "true",
        my_second_attribute: "111",
      },
      claimsToSuppress: ["email"],
    },
  }

  return event;
};

