import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../layout/Layout";

function Vehicles(): JSX.Element {
  return <>Vehicles</>;
}

export default withLayout(Vehicles);

export const getStaticProps = async () => ({
  props: {},
});
