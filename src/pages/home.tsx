import React, { ReactElement } from "react";
import Content from "../content/content";
import { PageTypes } from "../util/constants";

/**
 * Home page for routing.
 */
export default function Home() : ReactElement {
  return (
    <>
      <Content pageType={PageTypes.HOME}/>
    </>
  );
}