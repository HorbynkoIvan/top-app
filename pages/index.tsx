import React from "react";
import { Button, Htag, P, Tag, Rating } from "../components";

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
      <Tag size="s">Ghost</Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag size="m" color="grey">
        Grey
      </Tag>
      <Tag size="s" color="primary">
        Primary
      </Tag>
      <Rating rating={4} isEditable={true} />
    </div>
  );
}
