import styled from 'styled-components'

export const VideoDestaque = styled.section`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  &::before {
    content: "";
    display: block;
    background-image: ${props => `url(${props.image})`};
    background-position: 50% 50%;
    opacity: .6;
    grid-row: 1;
    grid-column: 1;
  }

  .container {
    grid-row: 1;
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 240px;
    color: var(--grayLight);
  }

  .panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    height: 100%;

    &:first-child {
      display: none;
    }

    &:last-child {
      height: 50%;
    }
  }

  .titulo {
    font-size: 27px;
    line-height: 32px;
    font-weight: 300;
  }

  .descricao,
  .antetitulo {
      display: none;
  }

  .btnAssistir {
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
  }

  @media(min-width: 661px) {
    &::before {
      opacity: .25;
    }

    .container {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
        height: auto;
        margin: 169px auto;
        padding: 0 40px;
    }

    .panel {
      justify-content: center;
      align-items: flex-start;
      
      &:first-child {
        grid-row: 1;
        grid-column: 2;
        display: flex;
      }

      &:last-child {
        grid-row: 1;
        grid-column: 1;
        height: 100%;
        margin-right: 50px;
      }
    }

    .antetitulo {
        font-size: 60px;
        line-height: 70px;
        background-color: var(--frontEnd);
        border-radius: 5px;
        padding: 5px;
        display: block;
    }

    .titulo {
        font-size: 46px;
        line-height: 54px;
        font-weight: normal;
        margin: 40px 0 0;
    }

    .descricao {
        font-size: 18px;
        line-height: 21px;
        font-weight: 300;
        display: block;
        margin: 9px 0 0;
    }

    .thumb {
        width: 100%;
        margin: auto;
        border: 4px solid var(--green);
    }

    .btnAssistir {
        display: none;
    }
  }
`
