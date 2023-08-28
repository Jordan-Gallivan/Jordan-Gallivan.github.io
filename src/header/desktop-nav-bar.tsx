import React from "react";
import Menu from "./menus/desktop-menu/menu";
import "./menus/desktop-menu/desktop-menu.css";
import { usePage } from "../util/pageHook";
import { PageTypes } from "../util/constants";
import { AboutMenus, HomeMenus } from "./menus/menus";

/**
 * Renders the navigation bar when page is viewed on a desktop.
 */
export default function DesktopNavBar() {
  const {page} = usePage();
  return (
    <div className={"navbar"}>
      <ul>
        <Menu
          items={
          page === PageTypes.HOME
            ? HomeMenus
            : AboutMenus}
          depth={0}
          root={true}
          callBack={()=>null}/>
      </ul>
    </div>
  );
}