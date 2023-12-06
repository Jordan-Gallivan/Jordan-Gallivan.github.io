import React, { useState } from "react";
import "../content/content.css";
import { posts } from "./posts"
import PostComponent from "./postComponent";
import { useDevice } from "../util/deviceHook";

/**
 * Renders the blog posts.
 */
export default function BlogPosts() {
  const device = useDevice();

  const [postOpen, setPostOpen] = useState(false);

  const [topPost, ...remainingPosts] = posts;

  const togglePostOpenState = (postState: boolean) => {
    setPostOpen(postState);
  }

  return (
    <>
      <div className={`top-row ${device.deviceType}`}>
        <img className={`main-photo ${device.deviceType}`} src={require('../images/mainPhoto.jpeg')} alt={"F-18 Story Time"}/>
        <div>
          <PostComponent post={topPost} topRow={true} postOpen={postOpen} callBack={togglePostOpenState}/>
        </div>
      </div>
      {remainingPosts.map((post, i) => (
        <div>
          <PostComponent post={post} postOpen={postOpen} callBack={togglePostOpenState}/>
        </div>
      ))}
    </>
  );
}