import React, { createContext, ReactNode, useContext, useLayoutEffect, useState } from "react";
import { DeviceTypes } from "./constants";

const DeviceContext = createContext<DeviceTypes>(DeviceTypes.DESKTOP);
export const useDevice = () => useContext(DeviceContext);

export default function DeviceProvider({children} : {children: ReactNode}) {
  const [deviceType, setDeviceType] = useState<DeviceTypes>(DeviceTypes.DESKTOP);

  const resize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 640) {
      setDeviceType(DeviceTypes.MOBILE);
    } else if (windowWidth <= 1280) {
      setDeviceType(DeviceTypes.TABLET);
    } else {
      setDeviceType(DeviceTypes.DESKTOP);
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <DeviceContext.Provider value={deviceType}>
      {children}
    </DeviceContext.Provider>
  );
}