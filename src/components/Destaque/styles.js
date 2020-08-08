import styled from 'styled-components'

export const VideoDestaque = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  &::before {
    content: "";
    display: block;
    background-image: ${props => `url(${props.image.mobile})`};
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: .6;
    grid-row: 1;
    grid-column: 1;
  }

  @media(min-width: 661px) {
    &::before {
      background-image: ${props => `url(${props.image.desktop})`};
      background-size: 100%;
      opacity: .25;
    }
  }
`
VideoDestaque.Container = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 240px;
  color: var(--grayLight);
  z-index: 2;

  @media(min-width: 661px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    height: auto;
    margin: 12.5% auto;
    padding: 0 40px;
  }
`

VideoDestaque.Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  height: 100%;

  &:first-child {
    height: auto;
  }

  &:last-child {
    display: none;
  }

  @media(min-width: 661px) {
    justify-content: center;
    align-items: flex-start;
    
    &:first-child {
      grid-row: 1;
      grid-column: 1;
      height: 100%;
      margin-right: 50px;
    }

    &:last-child {
      grid-row: 1;
      grid-column: 2;
      display: flex;
    }

  }
`

export const Antetitulo = styled.div`
  display: none;
  
  @media(min-width: 661px) {
    font-size: 60px;
    line-height: 70px;
    background-color: var(--frontEnd);
    border-radius: 5px;
    padding: 5px;
    display: block;
  }
`

export const Titulo = styled.h1`
  font-size: 27px;
  line-height: 32px;
  font-weight: 300;

  @media(min-width: 661px) {
    font-size: 46px;
    line-height: 54px;
    font-weight: normal;
    margin: 40px 0 0;
  }
`

export const Descricao = styled.p`
  display: none;

  @media(min-width: 661px) {
    font-size: 18px;
    line-height: 21px;
    font-weight: 300;
    display: block;
    margin: 9px 0 0;
  }
`

export const BotaoAssistir = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  text-decoration: none;
  background-color: var(--grayLight);
  color: var(--black);
  border: 1px solid var(--grayLight);
  border-radius: 5px;
  width: 100px;
  height: 30px;
  margin: auto;

  @media(min-width: 661px) {
    display: none;
  }
`
export const Video = styled.iframe`
  width: 100%;
  margin: auto;
  border: 4px solid var(--green);
`
