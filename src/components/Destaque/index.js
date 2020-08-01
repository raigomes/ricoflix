import React from 'react'

import styled from 'styled-components'
import './Destaque.css'

function Destaque (props) {
  const VideoDestaque = styled.section`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    &::before {
      content: "";
      display: block;
      background-image: url(${props.image});
      background-position: 50% 50%;
      opacity: .6;
      grid-row: 1;
      grid-column: 1;
    }

    .destaque--container {
      grid-row: 1;
      grid-column: 1;
    }

    @media(min-width: 661px) {
      &::before {
        opacity: .25;
      }
    }
  `

  return (
    <VideoDestaque>
      <div className='destaque--container'>
        <div className='destaque--panel'>
          <img className='destaque--thumb'
            src={props.image}
            alt='Placeholder' />
        </div>
        <div className='destaque--panel'>
          <div className='destaque--antetitulo'>{props.videoBeforeTitle}</div>
          <h1 className='destaque--titulo'>{props.videoTitle}</h1>
          <p className='destaque--descricao'>{props.videoDescription}</p>
          <a className='destaque--btnAssistir' href={props.url}>
            Assistir
          </a>
        </div>
      </div>
    </VideoDestaque>
  )
}

export default Destaque
