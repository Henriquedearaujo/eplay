/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'

import ProductList from '../../components/ProductList'
import { Game } from '../Homer'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import {
  useGetActionGameQuery,
  useGetSportsGameQuery,
  useGetSimulationGameQuery,
  useGetfightGameQuery,
  useGetRpgGameQuery
} from '../../components/services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: sportsGames } = useGetSportsGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: fightGames } = useGetfightGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()

if (actionGames && sportsGames && simulationGames && fightGames && rpgGames) {
  return (
    <>
      <ProductList games={actionGames} title="Ação" backgroud="black" id="action"/>
      <ProductList games={sportsGames} title="Esportes" backgroud="gray" id="sport"/>
      <ProductList games={simulationGames} title="Simulação" backgroud="black" id="simulation"/>
      <ProductList games={fightGames} title="Luta" backgroud="gray" id="fight"/>
      <ProductList games={rpgGames} title="RPG" backgroud="black" id="rpg"/>
    </>
  )
  }

  return (
    <h4>Carregando...</h4>
  )
}

export default Categories
