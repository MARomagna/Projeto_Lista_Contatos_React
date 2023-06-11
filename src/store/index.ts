import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contatos'
import filtroReducer from './reducers/filtro'
export type RootReducer = ReturnType<typeof store.getState>
export const store = configureStore({
 reducer: { contatos: contatosReducer, filtro: filtroReducer }
})
