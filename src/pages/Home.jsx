import React from "react";
import Landing from "../componants/Landing";
import Highlights from "../componants/Highlights";
import Featured from "../componants/Featured";
import Discounted from "../componants/Discounted";
import Explore from "../componants/Explore";

export default function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
}
