import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../../layout/Layout";

function People(): JSX.Element {
  return <>People</>;
}

export default withLayout(People);

export const getStaticProps = async () => ({
  props: {},
});
