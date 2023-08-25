import React, { ReactElement } from "react";
import "./mobile-menu.css";
import { IMenuItem } from "../menus";
import {  CLOSE } from "../../../util/constants";

interface IMobileMenuLinkArgs {
  item: IMenuItem,
  callBack: (f:any) => any,
}

/**
 * End point of menu or child menu.
 * @param item link data for menu endpoint
 * @param callBack function to close the menu when a link is clicked.
 */
export default function MobileMenuLink(
  {item, callBack} : IMobileMenuLinkArgs) : ReactElement {

  const clickClosesMenu = () => {
    callBack(CLOSE);
  }

  return (
    <div className={`mobile-menu-link`}>
      <a href={`${item.url}`} onClick={clickClosesMenu} >
      {item.name}
      </a>
    </div>
  )
}