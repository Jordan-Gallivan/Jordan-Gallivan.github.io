import React, { createContext, ReactNode, useContext, useLayoutEffect, useState } from "react";
import { DeviceTypes, ScreenHeight } from "./constants";

export interface DeviceTypeAndHeight {
  deviceType: DeviceTypes,
  screenHeight: ScreenHeight,
}

const DeviceContext = createContext<DeviceTypeAndHeight>({
  deviceType: DeviceTypes.DESKTOP,
  screenHeight: ScreenHeight.LARGE
});
export const useDevice = () => useContext(DeviceContext);

export default function DeviceProvider({children} : {children: ReactNode}) {
  const [deviceType, setDeviceType] = useState<DeviceTypes>(DeviceTypes.DESKTOP);
  const [screenHeight, setScreenHeight] = useState<ScreenHeight>(ScreenHeight.LARGE);

  const resize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (windowWidth <= 690) {
      setDeviceType(DeviceTypes.MOBILE);
    } else if (windowWidth <= 1280) {
      setDeviceType(DeviceTypes.TABLET);
    } else {
      setDeviceType(DeviceTypes.DESKTOP);
    }
    if (windowHeight < 400) {
      setScreenHeight(ScreenHeight.XSMALL);
    } else if (windowHeight <= 600) {
      setScreenHeight(ScreenHeight.SMALL);
    } else if (windowHeight <= 1000) {
      setScreenHeight(ScreenHeight.MEDIUM);
    } else {
      setScreenHeight(ScreenHeight.LARGE);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <DeviceContext.Provider value={{deviceType, screenHeight}}>
      {children}
    </DeviceContext.Provider>
  );
}