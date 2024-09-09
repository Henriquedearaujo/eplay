import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const Acao: Game[] = [
  {
    id: 1,
    category: 'RPG',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..'
  },
  {
    id: 1,
    category: 'RPG',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..'
  },
  {
    id: 1,
    category: 'RPG',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..'
  },
  {
    id: 1,
    category: 'RPG',
    title: 'Resident Evil 4',
    system: 'windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident,
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..'
  }
]

const Aventura: Game[] = [
  {
    id: 5,
    category: 'RPG',
    descripition:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    descripition:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™.',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },

  {
    id: 7,
    category: 'RPG',
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..',
    title: 'Resident Evil 4',
    system: 'Midendo switch',
    infos: ['17/05'],
    image: resident
  },

  {
    id: 8,
    category: 'RPG',
    descripition:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star wars',
    system: 'XBOX S/X',
    infos: ['17/05'],
    image: starWars
  }
]

const RPG: Game[] = [
  {
    id: 5,
    category: 'RPG',
    descripition:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    descripition:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™.',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },

  {
    id: 7,
    category: 'RPG',
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..',
    title: 'Resident Evil 4',
    system: 'Midendo switch',
    infos: ['17/05'],
    image: resident
  },

  {
    id: 8,
    category: 'RPG',
    descripition:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star wars',
    system: 'XBOX S/X',
    infos: ['17/05'],
    image: starWars
  }
]

const FPS: Game[] = [
  {
    id: 5,
    category: 'RPG',
    descripition:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    system: 'PS5',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 6,
    category: 'RPG',
    descripition:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™.',
    title: 'Zelda',
    system: 'windows',
    infos: ['17/05'],
    image: zelda
  },

  {
    id: 7,
    category: 'RPG',
    descripition:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..',
    title: 'Resident Evil 4',
    system: 'Midendo switch',
    infos: ['17/05'],
    image: resident
  },

  {
    id: 8,
    category: 'RPG',
    descripition:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star wars',
    system: 'XBOX S/X',
    infos: ['17/05'],
    image: starWars
  }
]
const Categories = () => (
  <>
    <ProductList games={Acao} title="Ação" backgroud="gray" />
    <ProductList games={Aventura} title="Aventura" backgroud="black" />
    <ProductList games={RPG} title="RPG" backgroud="gray" />
    <ProductList games={FPS} title="FPS" backgroud="black" />
  </>
)

export default Categories
