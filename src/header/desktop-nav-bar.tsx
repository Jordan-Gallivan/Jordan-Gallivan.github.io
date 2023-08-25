import React from "react";
import Menu from "./menus/desktop-menu/menu";
import { HomeMenus } from "./menus/menus";
import "./menus/desktop-menu/desktop-menu.css";

/**
 * Renders the navigation bar when page is viewed on a desktop.
 */
export default function DesktopNavBar() {
  return (
    <div className={"navbar"}>
      <ul>
        <Menu items={HomeMenus} depth={0} root={true} callBack={()=>null}/>
      </ul>
    </div>
  );
}