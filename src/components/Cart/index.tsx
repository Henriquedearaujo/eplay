import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Price,
  Quantity,
  Sidebar
} from './styles'
import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'
import { RootReducer } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove } from '../../components/store/reducers/cart'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogos(s) no carrinho</Quantity>
        <Price>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Price>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
