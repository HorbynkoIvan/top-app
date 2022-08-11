import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../../layout/Layout";

function Films(): JSX.Element {
  return <>Films</>;
}

export default withLayout(Films);

export const getStaticProps = async () => ({
  props: {},
});
