import React from 'react';
import ProviderExample from "./components/ProviderExample";
import {MetamaskCard} from "./components/MetamaskCard";
import {GnosisSafeCard} from "./components/GnosisSafeCard";

function App() {
  return (
    <ProviderExample>
      <div>App</div>
      <MetamaskCard />
      <GnosisSafeCard />
    </ProviderExample>
  );
}

export default App;
