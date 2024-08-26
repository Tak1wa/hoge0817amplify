import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [hoges, setHoges] = useState<Array<Schema["Hoge"]["type"]>>([]);

  useEffect(() => {
    client.models.Hoge.observeQuery().subscribe({
      next: (data) => setHoges([...data.items]),
    });
  }, []);

  function createHoge() {
    client.models.Hoge.create({ HogeContent: window.prompt("Hoge content") });
  }

  const formFields = {
    signUp: {
      "custom:tenant_id": {
        label: 'Hoge Tenant',
        order: 1
      }
    }
  };

  return (
    <Authenticator formFields={formFields}>
      {({ signOut }) => (
        <main>
          <h1>My Hoges</h1>
          <button onClick={createHoge}>+ new</button>
          <ul>
            {hoges.map((hoge) => (
              <li key={hoge.id}>{hoge.HogeContent}</li>
            ))}
          </ul>
          <div>
            🥳 App successfully hosted. Try creating a new Hoge.
            <br />
            <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
              Review next step of this tutorial.
            </a>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
