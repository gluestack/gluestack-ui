import React from "react";
import { communities } from "./data";
import Community from "./Community";

function Social() {
  return <Community communities={communities} />;
}

export default Social;
