import {MetaMask} from "@web3-react/metamask";
import {GnosisSafe} from "@web3-react/gnosis-safe";
import {Web3ReactHooks, Web3ReactProvider} from "@web3-react/core";

import { metamask, hooks as metamaskHooks } from '../connectors/metamask';
import { gnosisSafe, hooks as gnosisSafeHooks } from '../connectors/gnosis-safe';
import {FC, PropsWithChildren} from "react";

const connectors: [MetaMask | GnosisSafe, Web3ReactHooks][] = [
  [metamask, metamaskHooks],
  [gnosisSafe, gnosisSafeHooks]
];

const ProviderExample: FC<PropsWithChildren> = ({children}) => {
  return <Web3ReactProvider connectors={connectors}>
    {children}
  </Web3ReactProvider>
}

export default ProviderExample;