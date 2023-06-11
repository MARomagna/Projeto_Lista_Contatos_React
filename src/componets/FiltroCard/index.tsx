import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enuns/Contato'
import { RootReducer } from '../../store'
export type Props = {
 legenda: string
 criterio:
  | 'familia'
  | 'amigos'
  | 'trabalho'
  | 'food'
  | 'faculdade'
  | 'todos contatos'
 valor?: enums.Categoria
}
export const FiltroCard = ({ legenda, criterio, valor }: Props) => {
 const dispach = useDispatch()
 const { filtro, contatos } = useSelector((state: RootReducer) => state)
 const verificaAtivo = () => {
  const mesmoCriterio = filtro.criterio === criterio
  return mesmoCriterio
 }
 const contarContatos = () => {
  if (valor === 'todos contatos') return contatos.itens.length
  if (valor === 'amigos') {
   return contatos.itens.filter((item) => item.categoria === valor).length
  }
  if (valor === 'familia') {
   return contatos.itens.filter((item) => item.categoria === valor).length
  }
  if (valor === 'faculdade') {
   return contatos.itens.filter((item) => item.categoria === valor).length
  }
  if (valor === 'food') {
   return contatos.itens.filter((item) => item.categoria === valor).length
  }
  if (valor === 'trabalho') {
   return contatos.itens.filter((item) => item.categoria === valor).length
  }
 }
 const filtrar = () => {
  dispach(alteraFiltro({ criterio, valor }))
 }
 const ativo = verificaAtivo()
 const contador = contarContatos()
 return (
  <S.Card ativo={ativo} onClick={filtrar}>
   <S.Contador>{contador}</S.Contador>
   <S.Label>{legenda}</S.Label>
  </S.Card>
 )
}
