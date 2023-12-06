export const CLOSE = "close";
export const MOBILE_MENU_SIZE = "36px";

export enum DeviceTypes {
  DESKTOP = 'desktop',  // width > 1280px
  TABLET = 'tablet',    // 601 < width <= 1280px
  MOBILE = 'mobile',    // width <= 600px
}

export enum ScreenHeight {
  LARGE = 'large',  // > 1000
  MEDIUM = 'medium',  //  600 < height < 1000
  SMALL = 'small',    //  400 < height < 600
  XSMALL = 'xsmall',  // < 400
}

export enum PageTypes {
  HOME = 'Home',
  ABOUT = 'About',
}