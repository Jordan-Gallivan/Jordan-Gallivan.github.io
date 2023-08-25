import React, { ReactElement } from "react";
import "./openPostComponent.css";
import { FaWindowClose as CloseButton } from "react-icons/fa";
import { IPost } from "./posts";
import { CreateTransition } from "../util/createTransition";
import { useDevice } from "../util/deviceHook";

interface IOpenPostArgs {
  post:IPost,
  parentX: number,
  parentY: number,
  parentWidth: number,
  parentHeight: number,
  callBack: (f:any)=>any
}


/**
 * Expanded post component to allow user to read contents of post.
 * @param post post to populate component with
 * @param deviceType current deviceType user is using
 * @param parentX original post left position
 * @param parentY original post top position
 * @param parentWidth original post div width
 * @param parentHeight original post div height
 * @param callBack function to toggle opening/closing
 */
export default function OpenPostComponent(
  {post, parentX, parentY, parentWidth, parentHeight, callBack} : IOpenPostArgs): ReactElement {

  const deviceType = useDevice();

  return (
    <>
        <CreateTransition parentX={parentX} parentY={parentY} parentWidth={parentWidth} parentHeight={parentHeight}/>
        <div className={`open-post ${deviceType}`}>
          <div className={`open-post-title`}>
            {post.title}
            <button onClick={callBack}><CloseButton className={"close-button"} size={"24px"}/></button>
          </div>
          <div className={`open-post-content`}>
            {post.img}
            <div className={`open-post-text`}>{post.post}</div>
          </div>
        </div>
    </>
  );
}