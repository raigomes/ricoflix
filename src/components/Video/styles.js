import styled from 'styled-components'

export const VideoIframe = styled.iframe`
  width: 100%;
  margin: auto;
  border: 4px solid ${props => `var(--${props.color})`};
`
