import React, { ReactElement } from "react";
import "../content/content.css";
import "./about.css";
import { useDevice } from "../util/deviceHook";

/**
 * Renders the About Page.
 */
export default function AboutComponent() : ReactElement {
  const device = useDevice();

  return (
    <div className={`open-post ${device.deviceType} ${device.screenHeight}`} style={{animation: "none", textAlign: "center"}}>
      <img className={`about-photo ${device.deviceType}`} src={require("../images/aboutImage.jpeg")} alt={"About Me"}/>
      <p className={"about-text"}> I’m a dad, a husband, a former Marine F/A-18 Weapons Systems Officer, and budding computer scientist. I’m in
        my second year of the two-year Post-Baccalaureate Computer Science program at the University of North Florida.
        I have an incredible passion for learning and every day I have the privilege of doing that as a 35-year-old
        student.
      </p>
    </div>
  )
}
