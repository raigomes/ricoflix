import React from 'react'
import Menu from '../../../components/Menu'
import Rodape from '../../../components/Rodape'
import { Link } from 'react-router-dom'

function CadastroVideo () {
  return (
    <>
      <Menu />
      <h1>Cadastro de Vídeo</h1>
      <Link to='/cadastro/categoria'>
        Nova Categoria
      </Link>
      <Rodape />
    </>
  )
}

export default CadastroVideo
