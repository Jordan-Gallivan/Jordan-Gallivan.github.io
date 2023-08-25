import React, { ReactElement } from "react";
import "./content.css";
import { PageTypes } from "../util/constants";
import BlogPosts from "../posts/blogPostsRender";
import AboutComponent from "../about/aboutComponent";
import { useDevice } from "../util/deviceHook";

/**
 * Renders a Container to hold posts or pages.
 * @param pageType Home or About Page.
 */
export default function Content({pageType} : {pageType: PageTypes}): ReactElement {

  const deviceType = useDevice();

  let content: ReactElement;
  switch (pageType) {
    case PageTypes.HOME:
      content = <BlogPosts />;
      break;
    case PageTypes.ABOUT:
      content = <AboutComponent />;
      break
    default:
      content = <></>;
      break;
  }

  return (
    <>
      <div className={`content-container ${deviceType}`}>
        {content}
      </div>
    </>
  );
}
