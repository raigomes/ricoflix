import React from 'react'
import { VideoIframe, VideoThumb } from './styles'

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
          src={`https://www.youtube.com/embed/${videoId}`}
          color={props.color} />
        : <VideoThumb
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt='Imagem do video'
          color={props.color} />
      }
    </>
  )
}

export default Video
