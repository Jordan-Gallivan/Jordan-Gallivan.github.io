import React, { ReactElement, useState } from "react";
import { IMenuItem } from "../menus";
import { CLOSE, } from "../../../util/constants";
import "./mobile-menu.css";
import MobileMenuButton from "./mobileMenuButton";
import MobileMenuLink from "./mobileMenuLink";
import Socials from "../socials/socials";

interface IMobileMenuArgs {
  items: IMenuItem[] | undefined,
  menuVisible: boolean,
  depth: number,
  callBack: (f:any)=>any,
  socials?: boolean
}

export const initSubMenuStates = (menus: IMenuItem[]) => {
  const states: {[index:string] : boolean} = {};
  menus.forEach((menu) => {
    states[menu.name] = false;
  });
  return states;
}

/**
 * Renders a Hamburger Menu for viewing on mobile or tablet devices.
 * @param items Items to populate the menu with.
 * @param menuVisible true if menu is currently activated.
 * @param depth current depth of sub-menu.
 * @param socials true if social media links are to be rendered in this component.
 * @param callBack to toggle visibility of title when mobile menu is open.
 */
export default function MobileMenu(
  {items, menuVisible, depth, socials, callBack} : IMobileMenuArgs): ReactElement {

  const [subMenuState, setSubMenuState] = useState<{[index:string]:boolean}>(initSubMenuStates(items || []));
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  let menuNames: keyof typeof subMenuState;

  const openSubMenu = (menu: string) => {
    const updatedState = subMenuState;
    for (menuNames in subMenuState) {
      updatedState[menu] = menuNames === menu;
    }
    setSubMenuState(updatedState);
    setOpenMenu(menu);
  }

  const closeSubMenu = () => {
    setSubMenuState(initSubMenuStates(items || []))
    setOpenMenu(null);
  }

  const clickClosesMenu = () => {
      callBack(CLOSE);
  }

  if (openMenu) {
    const openMenuItem = items?.find((item) => item.name === openMenu)
    console.log("attempted render")
    return (
      <li style={menuVisible ? {display: "block"} : {}}>
        <MobileMenuButton
          key={200 + depth}
          item={openMenuItem}
          depth={depth}
          menuOpened={true}
          callBack={(childActivity: string | boolean) => {
            if (childActivity === CLOSE) {
              clickClosesMenu();
            } else {
              closeSubMenu();
            }
          }}/>
      </li>
    );
  } else {
    return (
      <>
        {items?.map((item, i) => (
          <li style={menuVisible ? {display: "block"} : {} } >
            {
              item.subMenus
                ? <MobileMenuButton
                  key={300 + (i * 1000) + depth}
                  item={item}
                  depth={depth}
                  callBack={(childActivity: string | boolean) => {
                    if (childActivity === CLOSE) {
                      clickClosesMenu();
                    } else if (childActivity) {
                      openSubMenu(item.name);
                    }
                  }}/>
                : <MobileMenuLink
                  key={300 + (i * 1000) + depth}
                  item={item}
                  callBack={clickClosesMenu}/>
            }
          </li>
        ))}
        {socials 
          ? <li style={menuVisible ? {display: "block"} : {} }><Socials/></li>
          : <></>}
      </>
    );
  }
}