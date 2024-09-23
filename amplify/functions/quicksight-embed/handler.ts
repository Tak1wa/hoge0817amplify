import type { Schema } from '../../data/resource';
import { GenerateEmbedUrlForRegisteredUserCommand, QuickSightClient } from "@aws-sdk/client-quicksight";

export const handler: Schema["quicksightEmbed"]["functionHandler"] = async (event) => {
    
    const client = new QuickSightClient({ region: "ap-northeast-1" });
    const response = await client.send(new GenerateEmbedUrlForRegisteredUserCommand({
        AwsAccountId: "550669467088",
        SessionLifetimeInMinutes: 600,
        UserArn: "arn:aws:quicksight:ap-northeast-1:550669467088:user/default/cm-iwasa.takahito/cm-iwasa.takahito",
        ExperienceConfiguration: {
            Dashboard: {
                InitialDashboardId: "3e6e631b-7f3f-4eaf-8d6d-8f02888ca1c6",
                FeatureConfigurations : {
                    SharedView: {
                        Enabled: true
                    }
                }
            },
        },
        AllowedDomains: [
            "http://localhost:5173"
        ]
    }))
    console.log(response);

  return response.EmbedUrl ? response.EmbedUrl : "hoge dummy";
};