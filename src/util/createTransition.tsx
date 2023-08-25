import React, { ReactElement } from "react";
import { DeviceTypes } from "./constants";

interface ICreateTransitionArgs {
  parentX: number,
  parentY: number,
  parentWidth: number,
  parentHeight: number,
}

type Frames = {[index:string] : number} & {
  0: string | number,
  25: string | number,
  50: string | number,
  75: string | number,
  100: string | number,
}

const PosCoefficients: Frames = {
  0: 1,
  12.5: .875,
  25: 0.75,
  37.5: .625,
  50: 0.5,
  62.5: .375,
  75: 0.25,
  87.5: .125,
  100: 0,
}

const WidthCoefficients: Frames = {
  0: 0,
  12.5: .125,
  25: 0.25,
  37.5: .375,
  50: 0.5,
  62.5: .625,
  75: 0.75,
  87.5: .875,
  100: 1,
}

/**
 * Creates the Style Component for opening a post.
 * @param parentX left position of the original post position
 * @param parentY top position of the original post position
 * @param parentWidth width of the original post div
 * @param parentHeight height of the original post div
 */
export const CreateTransition = ({parentX, parentY, parentWidth, parentHeight} : ICreateTransitionArgs ): ReactElement => {

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  parentY += parentHeight / 2;
  parentX += parentWidth / 2;
  // position of div as a percentage. Example top: 50%; left: 50%;
  const percentTop = ((parentY - window.scrollY) / windowHeight) * 100;
  const percentLeft = ((parentX - window.scrollX) / windowWidth) * 100;

  // vh and vw values of width of original post div
  const percentHeight = (parentHeight / windowHeight) * 100;
  const percentWidth = (parentWidth / windowHeight) * 100;

  // helper methods to incrementally change position, width, or height values of the div as it expands.
  const topFrameValues = (framePercent: keyof Frames) => {
    return 55 + (PosCoefficients[framePercent] as number) * (percentTop - 55);
  }
  const leftFrameValues = (framePercent: keyof Frames) => {
    return 50 + (PosCoefficients[framePercent] as number) * (percentLeft - 55);
  }
  const desktopWidthFrameValues = (framePercent: keyof Frames) => {
    return parentWidth + (WidthCoefficients[framePercent] as number) * (1232 - parentWidth);
  }
  const tableWidthFrameValues = (framePercent: keyof Frames) => {
    return percentWidth + (WidthCoefficients[framePercent] as number) * (95 - percentWidth);
  }
  const heightFrameValues = (framePercent: keyof Frames) => {
    return percentHeight + (WidthCoefficients[framePercent] as number) * (80 - percentHeight);
  }

  // creates the style element for the provided deviceType.  Iterates over each increment and appends
  //  the css attributes to the style element.
  const createFrames = (deviceType: DeviceTypes) => {
    let widthFunction: (framePercent: keyof Frames) => string;

    // initialize the width increment function
    if (deviceType === DeviceTypes.DESKTOP) {
      widthFunction = (framePercent: keyof Frames) => `${desktopWidthFrameValues(framePercent)}px`
    } else {
      widthFunction = (framePercent: keyof Frames) => `${tableWidthFrameValues(framePercent)}vw`
    }

    // initialize string for css attributes
    let keyFramesString = `@keyframes postAnimation-${deviceType} {`;

    // iterate over percentages for keyframes and append css attributes for provided deviceType
    for (const percent of Object.keys(PosCoefficients)) {
      keyFramesString +=
        `${percent}% {
          top: ${topFrameValues(percent)}%;
          left: ${leftFrameValues(percent)}%;
          height: ${heightFrameValues(percent)}vh;
          max-width: ${widthFunction(percent)};
          transform: translate(-50%, -50%);
          transform-origin: top right;
          ${percent !== "100" ? "overflow: hidden;" : ""}
        }`
    }
    return keyFramesString + "}"

  }

  return (
    <style>
      {createFrames(DeviceTypes.DESKTOP)}
      {createFrames(DeviceTypes.TABLET)}
    </style>

  )
}