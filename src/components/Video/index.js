import React from 'react'
import { VideoIframe } from './styles'

function getYoutubeId (youtubeUrl) {
  let videoId = youtubeUrl.split('v=')[1]
  const position = (videoId.indexOf('&'))

  if (position !== -1) {
    videoId = videoId.substring(0, position)
  }

  return videoId
}

function Video (props) {
  const videoId = getYoutubeId(props.url)

  return (
    <>
      {props.as === 'iframe'
        ? <VideoIframe
          width='646' height='333'
          color={props.color}
          src={`https://www.youtube.com/embed/${videoId}`} />
        : ''
      }
    </>
  )
}

export default Video
