import React from 'react'

import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Destaque from '../../components/Destaque'
import Carousel from '../../components/Carousel'

import dadosIniciais from '../../data/dados_iniciais.json'

function Home () {
  return (
    <>
      <Menu btnCadastro />
      <Destaque
        videoBeforeTitle={dadosIniciais.categorias[0].titulo}
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        image={'https://via.placeholder.com/1440x800'}
        videoDescription={'Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 😍 bora ver? \\o'}
      />

      <Carousel

      />

      <Rodape />
    </>
  )
}

export default Home
