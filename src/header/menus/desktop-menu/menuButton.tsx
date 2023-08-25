import React, { ReactElement, useState } from "react";
import { IMenuItem } from "../menus";
import Menu from "./menu";

/**
 * Parent element of returned child-menu
 * @param item Parent element menu data.
 * @param depth current dept of the parent of this menu.
 */
export default function MenuButton({item, depth}: {item: IMenuItem, depth: number}) : ReactElement{

  // is this button or its children currently being hovered over
  const [hover, setHover] = useState(false);
  let currDepth = depth + 1;

  return (
    <>
      <div onMouseOver={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
           style={{position: "relative"}}>
        <button
          key={currDepth}
          type={"button"}
          className={
            `${currDepth ===1
              ? "menu-root-button"
              : "menu-button"} ${hover ? "child-active" : ""}`}
        >{item.name}</button>
        <ul
          className={`menu ${currDepth < 2 ? "" : "sub"}`}
          style={{display: (hover ? "flex" : "flex")}}>
          <Menu
            key={currDepth}
            items={item.subMenus}
            depth={currDepth}
            hover={hover}
            callBack={() => setHover(false)}
          />
        </ul>
      </div>
    </>
  )
}