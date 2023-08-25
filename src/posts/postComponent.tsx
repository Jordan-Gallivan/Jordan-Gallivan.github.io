import React, { ReactElement, useEffect, useRef, useState } from "react";
import "./postComponent.css";
import { IPost } from "./posts";
import { DeviceTypes } from "../util/constants";
import OpenPostComponent from "./openPostComponent";
import linkToPost from "../util/link-to-post";
import { useDevice } from "../util/deviceHook";

interface IPostComponentArgs {
  post: IPost,
  topRow?: boolean,
  postOpen: boolean,
  callBack: (f:any)=>any
}

function ClickToRead({deviceType} : {deviceType: DeviceTypes}) : ReactElement {

  if (deviceType === DeviceTypes.DESKTOP) {
      return (
        <p className={`click-to-read ${deviceType}`}>Click Anywhere to Read More</p>
      )
  } else {
    return (
      <p className={`click-to-read ${deviceType}`}>Click to Read More</p>
    )
  }
}

/**
 * Minimized post container.
 * @param post post to populate container with
 * @param topRow true if post is in the top row of the viewport
 * @param postOpen true if another post is currently open
 * @param deviceType device type the user is using
 * @param callBack function to pass closed or open status to parent
 */
export default function PostComponent({post, topRow, postOpen, callBack} : IPostComponentArgs) : ReactElement {

  const deviceType = useDevice();
  const [selected, setSelected] = useState(false);  // is this post currently selected for viewing
  const postRef = useRef<HTMLButtonElement>(null);  // ref to pass post pos/dim data to opened post component

  // locations of post left (x) and top (y)
  const [postX, setPostX] = useState(0);
  const [postY, setPostY] = useState(0);

  // dimensions of post
  const [postWidth, setPostWidth] = useState(0);
  const [postHeight, setPostHeight] = useState(0);

  const setPositions = () => {
    const x = postRef.current?.offsetLeft || 0;
    setPostX(x);
    const y = postRef.current?.offsetTop || 0;
    setPostY(y);

    const width = postRef.current?.clientWidth || 0;
    setPostWidth(width);
    const height = postRef.current?.clientHeight || 0;
    setPostHeight(height);
  }

  // initialize positions on first render
  useEffect(() => {
    setPositions();
  }, []);

  // update positions on screen size change
  useEffect(() => {
    window.addEventListener("resize", setPositions);
    setPositions();
    return () => window.removeEventListener("resize", setPositions);
  }, []);

  const openPost = () => {
    if (!postOpen) {
      callBack(true);
      setSelected(true);
    }
  }

  const closePost = () => {
    callBack(false);
    setSelected(false);
  }

  const title: ReactElement = (
    <p className={"post-title"}>{post.title}</p>
  );

  // conditionally renders post component based on whether post includes an image
  return (
    <>
      <button id={linkToPost(post.title)} ref={postRef} onClick={openPost} className={`${topRow ? "top-post-container" : "post-container"} ${deviceType}`}>
        {post.img
          ? <>
            {title}
            {post.img}
          </>
          : <>
            {title}
            <div className={`post-content`}>{post.post}</div>
          </>
        }
        <ClickToRead deviceType={deviceType}/>
      </button>
      {selected
        &&
        <OpenPostComponent
          post={post}
          parentX={postX}
          parentY={postY}
          parentWidth={postWidth}
          parentHeight={postHeight}
          callBack={closePost}/>
      }
    </>
  );
}