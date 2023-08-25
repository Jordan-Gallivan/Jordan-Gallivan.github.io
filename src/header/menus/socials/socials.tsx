import React, { ReactElement } from "react";
import { socials } from "../menus";
import "./socials.css"

export default function Socials(): ReactElement {
  return (
    <>
      {socials.map((social, i) => (
        <div className={"socials"} key={i}>
          <a href={social.url} target={"_blank"}>
            {social.img({className: "socials-img", size: "32px",})}
          </a>
        </div>
      ))}
    </>
  )
}