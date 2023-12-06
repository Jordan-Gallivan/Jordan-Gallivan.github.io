import React, { ReactElement } from "react";
import "./mobile-menu.css";
import { IMenuItem } from "../menus";
import { CLOSE, PageTypes } from "../../../util/constants";
import { usePage } from "../../../util/pageHook";

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

  const {changePage} = usePage();
  const updatePage = (page: PageTypes) => {
    changePage(page);
    clickClosesMenu()
  }

  const clickClosesMenu = () => {
    callBack(CLOSE);
  }

  if (item.name === PageTypes.HOME || item.name === PageTypes.ABOUT) {
    return (
      <button
        type={"button"}
        onClick={() => updatePage(item.pageNav || PageTypes.HOME)}
        className={`mobile-menu-link`}
      >{item.name}</button>
    )
  } else {
    return (
      <div className={`mobile-menu-link`}>
        <a href={`${item.url}`} onClick={clickClosesMenu}>
          {item.name}
        </a>
      </div>
    )
  }
}