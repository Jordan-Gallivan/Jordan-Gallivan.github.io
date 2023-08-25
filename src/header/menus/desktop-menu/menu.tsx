import React, { ReactElement } from "react";
import { IMenuItem } from "../menus";
import MenuLink from "./menuLink";
import MenuButton from "./menuButton";
import "./desktop-menu.css";

export interface IMenuArgs {
  items: IMenuItem[] | undefined,
  depth: number,
  hover?: boolean,
  root?:boolean
  callBack: (f:any)=>any,
}

/**
 * Creates a Menu comprised of MenuButtons and MenuLinks.  Intended to be nested in a <ul></ul> or as the child of a
 * MenuButton.
 * @param items Menu Items.
 * @param depth current depth of the menu.
 * @param hover true if root menu being hovered over.
 * @param root true if this menu is the root menu.
 * @param callBack callback to close menu with a link is clicked.
 */
export default function Menu({items, depth, hover,  root, callBack}: IMenuArgs): ReactElement {

  return (
    <>
      {items?.map((item: IMenuItem, i) => (
        <li className={root ? "menu-root" : ""} style={hover? {display:"block"}: {}}>
          {
            item.subMenus
            ? <MenuButton
              key={i}
              item={item}
              depth={depth}/>
            : <MenuLink
              key={i}
              depth={depth}
              item={item}
              callBack={callBack}/>
          }
        </li>
      ))}
    </>
  )
}