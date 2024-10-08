import { useEffect, useState } from 'react'

import { Imagem, Precos, Titulo } from './styles'
import { Game } from '../../pages/Homer'
import { formataPreco } from '../ProductList'

import Tag from '../Tag'
import Button from '../Button'
import { useGetFeturedGameQuery } from '../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeturedGameQuery()

  if (!game) {
    return <h3>Carregando</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old)}</span> <br />
            por apenas {formataPreco(game.prices.current)}
          </Precos>
        </div>
        <Button
          type={'link'}
          to={`/product/${game.id}`}
          title={'Clique aqui para aproveitar esta oferta'}
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
