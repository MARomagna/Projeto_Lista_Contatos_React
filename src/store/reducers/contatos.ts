import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contato } from '../../models/Contato'
type ContatosState = {
 itens: Contato[]
}
const initialState: ContatosState = {
 itens: [
  {
   id: 1,
   descricao: 'Pessoal',
   titulo: 'Marco Romagna',
   telefone: '45-999999999',
   email: 'maromagna@gmail.com',
   categoria: 'Familia'
  },
  {
   id: 2,
   descricao: 'Esposa - Ligar em caso emergencial ',
   titulo: 'Veronica',
   telefone: '45-999999999',
   email: 'maromagna@gmail.com',
   categoria: 'Familia'
  },
  {
   id: 3,
   descricao: 'Local de trabalho',
   titulo: 'CVALE',
   telefone: '45-999999999',
   email: 'maromagna@gmail.com',
   categoria: 'Trabalho'
  },
  {
   id: 4,
   descricao: 'Amigo para qualquer hora',
   titulo: 'Joao',
   telefone: '45-999999999',
   email: 'maromagna@gmail.com',
   categoria: 'Amigos'
  }
 ]
}
const contatoSlice = createSlice({
 name: 'contatos',
 initialState,
 reducers: {
  remover: (state, action: PayloadAction<number>) => {
   state.itens = state.itens.filter((contato) => contato.id !== action.payload)
  },
  editar: (state, action: PayloadAction<Contato>) => {
   const indexContato = state.itens.findIndex(
    (co) => co.id === action.payload.id
   )
   if (indexContato >= 0) {
    state.itens[indexContato] = action.payload
   }
  },
  cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
   const contatoExiste = state.itens.find(
    (contato) =>
     contato.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
   )
   if (contatoExiste) {
    alert('Este Contato ja exite.')
   } else {
    const ultimoContato = state.itens[--state.itens.length]
    const contatoNovo = {
     ...action.payload,
     id: ultimoContato ? ultimoContato.id + 1 : 1
    }
    state.itens.push(contatoNovo)
   }
  }
 }
})
export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
