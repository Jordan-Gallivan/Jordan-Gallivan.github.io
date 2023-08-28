import React, { ReactElement } from "react";
import "./youtubeEmbed.css"

export default function YoutubeEmbed({embedID}:{embedID: string}) : ReactElement {
  return (
    <div className={"vid-response"} >
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${embedID}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}