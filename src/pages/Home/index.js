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
        categoria={dadosIniciais.categorias[0].titulo}
        video={dadosIniciais.categorias[0].videos[0]}
        descricao={'Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 😍 bora ver? \\o'}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Rodape />
    </>
  )
}

export default Home
