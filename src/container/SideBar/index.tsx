import { useDispatch, useSelector } from 'react-redux'
import { FiltroCard } from '../../componets/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enuns/Contato'
import { Botao, Imput } from '../../styles'
import { useNavigate } from 'react-router-dom'
type Props = { mostarFiltro: boolean }
const SideBar = ({ mostarFiltro }: Props) => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const { termo } = useSelector((state: RootReducer) => state.filtro)
 return (
  <S.Aside>
   <div>
    {mostarFiltro ? (
     <>
      <Imput
       type='text'
       placeholder='Buscar'
       value={termo}
       onChange={(e) => dispatch(alteraTermo(e.target.value))}
      />
      <S.Filtros>
       <FiltroCard
        valor={enums.Categoria.FAMILIA}
        criterio={'familia'}
        legenda='👪 Familia'
       />
       <FiltroCard
        valor={enums.Categoria.AMIGOS}
        criterio={'amigos'}
        legenda='👊 Amigos'
       />
       <FiltroCard
        valor={enums.Categoria.TRABALHO}
        criterio={'trabalho'}
        legenda='🏢 Trabalho'
       />
       <FiltroCard
        valor={enums.Categoria.FOOD}
        criterio={'food'}
        legenda='🍗 Food'
       />
       <FiltroCard
        valor={enums.Categoria.FACULDADE}
        criterio={'faculdade'}
        legenda='🎓 Faculdade'
       />
       <FiltroCard
        valor={enums.Categoria.TODAS}
        criterio={'todos contatos'}
        legenda='😀 Todos Contatos'
       />
      </S.Filtros>
     </>
    ) : (
     <Botao onClick={() => navigate('/')} type='button'>
      Voltar a lista de Contatos
     </Botao>
    )}
   </div>
  </S.Aside>
 )
}
export default SideBar
