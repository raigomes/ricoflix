import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Page404 from './pages/Page404'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} exact />
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
