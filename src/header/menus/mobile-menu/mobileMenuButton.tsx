import React, { ReactElement, useState } from "react";
import { IMenuItem } from "../menus";
import "./mobile-menu.css";
import MobileMenu from "./mobile-menu";
import { CLOSE, } from "../../../util/constants";
import { BiSolidRightArrow as RightArrow,
BiSolidDownArrow as DownArrow } from "react-icons/bi";

interface IMobileMenuButtonArgs {
  item: IMenuItem | undefined,
  depth: number,
  menuOpened?: boolean,
  callBack: (f:any) => any,
}

/**
 * Parent element of returned child-menu
 * @param item Parent element menu data.
 * @param depth current depth of the sub-menu.
 * @param menuOpened true if menu is currently visible.
 * @param callBack function to toggle the state of the current sub-menu.
 */
export default function MobileMenuButton(
  {item, depth, menuOpened, callBack} : IMobileMenuButtonArgs) : ReactElement {

  const [selected, setSelected] = useState(menuOpened || false);
  let currDepth = depth + 1;

  const toggleSelected = () => {
    setSelected(!selected);
    callBack(!selected);
  }

  const clickClosesMenu = (childActivity: string | boolean) => {
    if (childActivity === CLOSE) {
      callBack(CLOSE);
    }
  }

  return (
    <>
      <div style={{position: "relative"}}>
        <button
          key={400 + currDepth}
          type={"button"}
          className={`mobile-menu-button`}
          onClick={toggleSelected}
        >
          {item?.name}
          <span className={`button-arrow`}>
            {selected ? <DownArrow/> : <RightArrow/>}
          </span>
        </button>
        <ul className={`sub-menu`}>
          <MobileMenu
            key={500 + currDepth}
            items={item?.subMenus}
            menuVisible={selected}
            depth={currDepth}
            callBack={(childActivity: string | boolean) => clickClosesMenu(childActivity)}
          />
        </ul>
      </div>
    </>
  );
}
