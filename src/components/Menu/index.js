import React from 'react'

import Logo from '../../assets/img/logo.png'

import { Link } from 'react-router-dom'

import './Menu.css'

function Menu (props) {
  return (
    <nav className='menu'>
      <a href='/'>
        <img className='logo' src={Logo} alt='Logo do Ricoflix' />
      </a>
      {props.btnCadastro &&
        <Link to='/cadastro/video' className='btnMenu'>
          Novo vídeo
        </Link>
      }
    </nav>
  )
}

export default Menu
