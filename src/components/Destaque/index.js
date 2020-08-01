import React from 'react'

import { VideoDestaque } from './styles'

function Destaque (props) {
  return (
    <VideoDestaque image={props.image}>
      <div className='container'>
        <div className='panel'>
          <img className='thumb'
            src={props.image}
            alt='Placeholder' />
        </div>
        <div className='panel'>
          <div className='antetitulo'>{props.videoBeforeTitle}</div>
          <h1 className='titulo'>{props.videoTitle}</h1>
          <p className='descricao'>{props.videoDescription}</p>
          <a className='btnAssistir' href={props.url}>
            Assistir
          </a>
        </div>
      </div>
    </VideoDestaque>
  )
}

export default Destaque
