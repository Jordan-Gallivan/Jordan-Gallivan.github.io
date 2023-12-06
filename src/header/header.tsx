import React, { ReactElement } from "react";
import DesktopNavBar from "./desktop-nav-bar";
import Socials from "./menus/socials/socials";
import "./header.css";
import { DeviceTypes } from "../util/constants";
import MobileNavBar from "./mobile-nav-bar";
import { useDevice } from "../util/deviceHook";

/**
 * Header that displays the title and menu for the page.
 */
export default function Header(): ReactElement {

  const device = useDevice();

  return (
    <div className={"header"}>
      <div className={`title ${device.deviceType}`}>
        <p>The Old Guy in the Front of Class</p>
      </div>
      <div className={`links ${device.deviceType}`}>
        { device.deviceType === DeviceTypes.DESKTOP
          ? <>
              <DesktopNavBar/>
              <Socials/>
            </>
          : <>
            <MobileNavBar/>
            </>
        }
      </div>
    </div>
  )
}

