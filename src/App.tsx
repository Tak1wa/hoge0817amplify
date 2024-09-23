import '@aws-amplify/ui-react/styles.css'
// import { Authenticator } from '@aws-amplify/ui-react'
// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// import { ContentOptions, createEmbeddingContext, FrameOptions } from 'amazon-quicksight-embedding-sdk';
// import { onMessageReceived } from 'aws-amplify/in-app-messaging';

// const client = generateClient<Schema>();

function App() {
//   useEffect(() => {
//     // embedDashboard();
//     // executeAsyncEvent();
//   }, []);

  // const [updateLabel, setUpdateLabel] = useState<string>()
  // const executeAsyncEvent = async () => {
  //   const { data } = await client.queries.hoge0918async();
  //   console.log(data);
  //   setUpdateLabel("executeAsyncEvent");
  // };

  // const executeSyncEvent = async () => {
  //   const { data } = await client.queries.hoge0918sync();
  //   console.log(data);
  //   setUpdateLabel("executeSyncEvent");
  // };

  // const embedDashboard = async () => {
  //   const embeddingContext = await createEmbeddingContext();

  //   const embedUrl = await client.queries.quicksightEmbed();
  //   const frameOptions: FrameOptions = {
  //     url: embedUrl.data ? embedUrl.data : "hoge",
  //     container: '#hoge-quicksight-container',
  //     height: "700",
  //     width: "700",
  //   };

  //   const contentOptions : ContentOptions = {
  //     locale: "js-JP",
  //     onMessage: async (messageEvent) => {
  //       switch (messageEvent.eventName) {
  //           case 'CONTENT_LOADED': {
  //               console.log("All visuals are loaded. The title of the document:", messageEvent.message?.title);
  //               break;
  //           }
  //           case 'ERROR_OCCURRED': {
  //               console.log("Error occurred while rendering the experience. Error code:", messageEvent.message?.errorCode);
  //               break;
  //           }
  //           case 'PARAMETERS_CHANGED': {
  //               console.log("Parameters changed. Changed parameters:", messageEvent.message?.changedParameters);
  //               // setShareEnabled(true);
  //               break;
  //           }
  //           case 'CALLBACK_OPERATION_INVOKED': {
  //             console.log("Callback Operation Invoked. parameters:", messageEvent.message?.CustomActionId);
  //             break;

  //           }
  //           case 'SELECTED_SHEET_CHANGED': {
  //               console.log("Selected sheet changed. Selected sheet:", messageEvent.message?.selectedSheet);
  //               break;
  //           }
  //           case 'SIZE_CHANGED': {
  //               console.log("Size changed. New dimensions:", messageEvent.message);
  //               break;
  //           }
  //           case 'MODAL_OPENED': {
  //               window.scrollTo({
  //                   top: 0 // iframe top position
  //               });
  //               break;
  //           }
  //           // case 'PAGE_NAVIGATION': {
  //           //     // setPageType(messageEvent.message.pageType); 
  //           //     if (messageEvent.message?.pageType === 'DASHBOARD') {
  //           //         setShareEnabled(true);
  //           //         } else {
  //           //         setShareEnabled(false);
  //           //     }
  //           //     break;
  //           // }
  //       }
  //     },
  //   };
  //   const embedDashboard = await embeddingContext.embedDashboard(frameOptions, contentOptions);
  //   // const setShareEnabled = async (enabled : boolean) => {
  //   //   console.log("hoge enabled: " + enabled);
  //   //   const response = await embedDashboard.createSharedView();
  //   //   console.log("hoge enabled: " + response.message?.);
  //   // };
  // }

  return (
    // <Authenticator>
    //   {({ signOut }) => (
    //     <main>
    //       <h1>updateLabel : {updateLabel}</h1>
    //       <div id="hoge-quicksight-container"></div>
    //       <button onClick={executeAsyncEvent}>Execute Async Event</button>
    //       <button onClick={executeSyncEvent}>Execute Sync Event</button>
    //       <button onClick={signOut}>Sign out</button>
    //     </main>
    //   )}
    // </Authenticator>
    <div>
      <p>hoge</p>
    </div>
  );
}

export default App;
