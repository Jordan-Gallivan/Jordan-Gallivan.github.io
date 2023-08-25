import React, { ReactElement } from "react";
import { IMenuItem } from "../menus";

/**
 * End point of menu or child menu.
 * @param item link data for menu endpoint
 * @param depth current depth of this element
 * @param callBack function to close the menu when a link is clicked.
 */
export default function MenuLink({item, depth, callBack}:
                                   {item: IMenuItem, depth: number, callBack: (f:any)=>any}) : ReactElement{
  let currDepth = depth + 1;

  return (
    <>
      <a href={`${item.url}`}
         className={ currDepth === 1
           ? "menu-root-link"
           : "menu-link"}
         onClick={callBack}
      >{item.name}</a>
    </>
  )
}