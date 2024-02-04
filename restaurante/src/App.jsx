import React from 'react'
import { useState } from 'react'
import Hashtaurante from './assets/hashtaurante.webp'
import './App.css'

import { Navegacao } from './Navegacao'
import { ItemCardapio } from './ItemCardapio'
import { pratosPrincipais, sobremesas, bebidas } from './cardapio'

export function App() {
const paginamenu = [pratosPrincipais, sobremesas, bebidas];
const [paginaSelecionada, atualizarPaginaSelecionada] = useState(0);

  return (
    <>
      <img src={Hashtaurante} alt="" className='capa'/>
      <Navegacao atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
      <div className='menu'>
        {paginamenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>)}
      </div>
    </>
  )
}

export default App
