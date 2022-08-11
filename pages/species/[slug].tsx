import React, { useState } from "react";
import axios from "axios";

import { withLayout } from "../../layout/Layout";

function Species(): JSX.Element {
  return <>Species</>;
}

export default withLayout(Species);

export const getStaticProps = async () => ({
  props: {},
});
