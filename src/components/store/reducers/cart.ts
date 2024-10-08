import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../../pages/Homer'

type CartSlice = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id == action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
