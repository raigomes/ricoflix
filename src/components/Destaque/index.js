import React from 'react'

import { VideoDestaque, Titulo, Antetitulo, Descricao, BotaoAssistir, Video } from './styles'

function getYoutubeId (youtubeUrl) {
  let videoId = youtubeUrl.split('v=')[1]
  const position = (videoId.indexOf('&'))

  if (position !== -1) {
    videoId = videoId.substring(0, position)
  }

  return videoId
}

function getThumbnailUrl (youtubeUrl) {
  return {
    mobile: `https://img.youtube.com/vi/${getYoutubeId(youtubeUrl)}/hqdefault.jpg`,
    desktop: `https://img.youtube.com/vi/${getYoutubeId(youtubeUrl)}/maxresdefault.jpg`
  }
}

function getEmbedUrl (youtubeUrl) {
  return `https://www.youtube.com/embed/${getYoutubeId(youtubeUrl)}`
}

function Destaque (props) {
  const bgImage = getThumbnailUrl(props.url)
  return (
    <VideoDestaque image={bgImage}>
      <VideoDestaque.Container>
        <VideoDestaque.Panel>
          <Antetitulo>{props.videoBeforeTitle}</Antetitulo>
          <Titulo>{props.videoTitle}</Titulo>
          <Descricao>{props.videoDescription}</Descricao>
          <BotaoAssistir href={props.url}>
            Assistir
          </BotaoAssistir>
        </VideoDestaque.Panel>
        <VideoDestaque.Panel>
          <Video
            width='646' height='333'
            src={getEmbedUrl(props.url)}
          />
        </VideoDestaque.Panel>
      </VideoDestaque.Container>
    </VideoDestaque>
  )
}

export default Destaque
