import {FC, useEffect} from "react";
import * as providers from '@ethersproject/providers';
import {MetaMask} from "@web3-react/metamask";
import {GnosisSafe} from "@web3-react/gnosis-safe";

interface CardProps {
  connector: MetaMask | GnosisSafe;
  useAccounts:  () => string[] | undefined;
  useIsActive: () => boolean;
  useProvider: () => providers.Web3Provider | undefined;
  name: string;
}

export const Card: FC<CardProps> = ({connector, useIsActive, useProvider, useAccounts, name}) => {
  const accounts = useAccounts()
  const isActive = useIsActive()
  const provider = useProvider();

  useEffect(() => {
    void connector.connectEagerly().catch(() => console.log("Failed to connect eagerly to metamask"));
  }, []);

  const handleConnect = () => connector.activate();

  const handleSign = async () => {
    if (provider) {
      const signer = await provider.getSigner(0);
      const signature = await signer.signMessage("ABOBA MESSAGE");
      console.log(signature);
    } else {
      console.log(name, "NO PROVIDER");
    }
  };

  return <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid black'}}>
    <div>
      {name}:
      {
        isActive
          ? <>Connected <button onClick={handleSign}>Sign sample</button></>
          : <button onClick={handleConnect}>Connect</button>
      }
    </div>
    <div>Accounts: {accounts ? accounts.map((account) => <p key={account}>{account}</p>) : "No accounts"}</div>
  </div>
}