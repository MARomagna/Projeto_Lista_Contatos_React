import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enuns/Contato'
type FiltroState = {
 termo?: string
 criterio:
  | 'familia'
  | 'amigos'
  | 'trabalho'
  | 'food'
  | 'faculdade'
  | 'todos contatos'
 valor?: enums.Categoria
}
const initialState: FiltroState = { termo: '', criterio: 'todos contatos' }
const filtroSlice = createSlice({
 name: 'filtro',
 initialState,
 reducers: {
  alteraTermo: (state, action: PayloadAction<string>) => {
   state.termo = action.payload
  },
  alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
   state.criterio = action.payload.criterio
   state.valor = action.payload.valor
  }
 }
})
export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
