import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../layout/Layout";
import { Button, Htag, P, Rating, Tag } from "../components";
import { FilmItem } from "../interfaces/menu.interface";

interface Props extends Record<string, unknown> {
  menu: FilmItem[];
}

function Home({ menu }: Props): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  console.log(menu);

  return (
    <>
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
      <ul>
        {menu.map((item) => (
          <li key={item.episode_id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps = async () => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + "films");
  return {
    props: {
      menu: data.results,
    },
  };
};
