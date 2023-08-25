import React, { useEffect, useRef, useState } from "react";
import { HomeMenus } from "./menus/menus";
import "./mobile-nav-bar.css";
import { CLOSE, MOBILE_MENU_SIZE } from "../util/constants";
import { MdOutlineClose as Close } from "react-icons/md";
import { GiHamburgerMenu as Hamburger } from "react-icons/gi";
import MobileMenu from "./menus/mobile-menu/mobile-menu";
import { useDevice } from "../util/deviceHook";

/**
 * Hamburger menu for mobile and tablet devices.
 */
export default function MobileNavBar() {
  const deviceType = useDevice();

  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  const handleClick = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement)) {
      setMenuVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div className={`menu-root ${deviceType} ${menuVisible ? "menu-visible" : ""}`}>
      <button className={"hamburger"}
              onClick={toggleMenu}>
        {menuVisible
          ? <Close size={MOBILE_MENU_SIZE}/>
          : <Hamburger size={MOBILE_MENU_SIZE}/>}
      </button>
      <div ref={menuRef} className={`menu-content ${deviceType} ${menuVisible ? "selected" : ""}`}>
        <ul>
          <MobileMenu
            key={100}
            items={HomeMenus}
            menuVisible={menuVisible}
            depth={0}
            socials={true}
            callBack={(childAction: boolean | string) => {
              if (childAction === CLOSE) { toggleMenu(); }
            }}
          />
        </ul>
      </div>
    </div>
  );
}