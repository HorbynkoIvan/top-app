import React from "react";
import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h3">sometext</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">text large</P>
      <P size="m">text middle</P>
      <P size="s">text small</P>
    </div>
  );
}
