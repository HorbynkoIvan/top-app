import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../../layout/Layout";

function Starships(): JSX.Element {
  return <>Starships</>;
}

export default withLayout(Starships);

export const getStaticProps = async () => ({
  props: {},
});
