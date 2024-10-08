import { useState } from 'react'

import Section from '../components/Section'
import { GalleryItem } from '../pages/Homer'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import spiderMan from '../assets/images/banner-homem-aranha.png'
import zelda from '../assets/images/zelda.png'
import hogwarts from '../assets/images/fundo_hogwarts.png'
import resident from '../assets/images/resident.png'
import play from '../assets/images/botao-play.png'
import zoom from '../assets/images/mais-zoom.png'
import fechar from '../assets/images/fechar.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderMan
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/Iz2TY7_Q27M?si=RG3b8iuD38B1_5YO'
  }
]

type Props = {
  defaulCorver: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaulCorver, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaulCorver
  }

  const getMediaIcom = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcom(media)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type == 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
