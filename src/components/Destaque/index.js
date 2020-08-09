import React from 'react'

import { VideoDestaque, Titulo, Antetitulo, Descricao, BotaoAssistir } from './styles'
import Video from '../Video'

function getYoutubeId (youtubeUrl) {
  let videoId = youtubeUrl.split('v=')[1]
  const position = (videoId.indexOf('&'))

  if (position !== -1) {
    videoId = videoId.substring(0, position)
  }

  return videoId
}

function Destaque (props) {
  const bgImage = {
    mobile: `https://img.youtube.com/vi/${getYoutubeId(props.video.url)}/hqdefault.jpg`,
    desktop: `https://img.youtube.com/vi/${getYoutubeId(props.video.url)}/maxresdefault.jpg`
  }

  return (
    <VideoDestaque image={bgImage}>
      <VideoDestaque.Container>
        <VideoDestaque.Panel>
          <Antetitulo>{props.categoria}</Antetitulo>
          <Titulo>{props.video.titulo}</Titulo>
          <Descricao>{props.descricao}</Descricao>
          <BotaoAssistir href={props.video.url}>
            Assistir
          </BotaoAssistir>
        </VideoDestaque.Panel>
        <VideoDestaque.Panel>
          <Video as='iframe' url={props.video.url} color='green' />
        </VideoDestaque.Panel>
      </VideoDestaque.Container>
    </VideoDestaque>
  )
}

export default Destaque
