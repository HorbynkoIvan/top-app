import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../layout/Layout";

function Planets(): JSX.Element {
  return <>Planets</>;
}

export default withLayout(Planets);

export const getStaticProps = async () => ({
  props: {},
});
