import styled from 'styled-components'

export const Footer = styled.footer`
    border-top: 2px solid var(--green);
    margin: 40px 0 50px;
    color: var(--white);
    width: 100%;

    .rodape--container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        width: 300px;
    }

    .rodape--logo {
        width: 120px;
        height: 30px;
    }

    .rodape--descricao {
        font-size: 18px;
        line-height: 21px;
        font-weight: 300;
        margin: 15px 0 0;
    }

    .rodape--descricao span {
        font-weight: bold;
        color: var(--green);
    }

    @media(min-width: 881px) {
        .logo {
            width: 250px;
            height: 60px;
        }
    }
`
