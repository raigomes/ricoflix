import styled from 'styled-components'

export const VideoIframe = styled.iframe`
  width: 100%;
  margin: auto;
  border: 4px solid ${props => `var(--${props.color})`};
`
export const VideoThumb = styled.img`
  width: 98%;
  margin: 0 2%;
  border: 2px solid ${props => `var(--${props.color})`};
`
