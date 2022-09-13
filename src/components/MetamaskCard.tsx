import {FC} from "react";
import {hooks, metamask} from "../connectors/metamask";
import {Card} from "./Card";

const {useAccounts, useIsActive, useProvider } = hooks

export const MetamaskCard: FC = () => {
  return <Card
    connector={metamask}
    useAccounts={useAccounts}
    useIsActive={useIsActive}
    useProvider={useProvider}
    name="Metamask"
  />
}