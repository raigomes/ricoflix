import React from 'react'

import Logo from '../../assets/img/logo.png'

import './Menu.css'
import Button from '../Button'

function Menu () {
  return (
    <nav className='menu'>
      <a href='/'>
        <img className='logo' src={Logo} alt='Logo do Ricoflix' />
      </a>
      <Button>
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu
