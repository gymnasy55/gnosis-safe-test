import {FC} from "react";
import {hooks, gnosisSafe} from "../connectors/gnosis-safe";
import {Card} from "./Card";

const {useAccounts, useIsActive, useProvider } = hooks

export const GnosisSafeCard: FC = () => {
  return <Card
    connector={gnosisSafe}
    useAccounts={useAccounts}
    useIsActive={useIsActive}
    useProvider={useProvider}
    name="GnosisSafe"
  />
}