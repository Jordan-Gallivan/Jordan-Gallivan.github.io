import React, { ReactElement } from "react";
import Content from "../content/content";
import { PageTypes } from "../util/constants";

/**
 * About page for routing.
 */
export default function About() : ReactElement {
  return (
    <>
      <Content pageType={PageTypes.ABOUT} />
    </>
  );
}