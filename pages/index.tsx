import React, { useState } from "react";
import { Layout } from "../layout/Layout";
import { Button, Htag, P, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <Layout>
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
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </Layout>
  );
}
