import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import { Botao, BotaoSalvar } from '../../styles'
type Props = ContatoClass
export const Contato = ({
 descricao: descricaoOriginal,
 titulo,
 categoria,
 telefone,
 email,
 id
}: Props) => {
 const dispatch = useDispatch()
 const [Editando, setEditando] = useState(false)
 const [descricao, setDescricao] = useState('')
 useEffect(() => {
  if (descricaoOriginal.length > 0) setDescricao(descricaoOriginal)
 }, [descricaoOriginal])
 function cancelarEdicao() {
  setEditando(false)
  setDescricao(descricaoOriginal)
 }
 return (
  <S.Card>
   <S.Titulo>{titulo}</S.Titulo>
   <S.Titulo2>Telefone: {telefone}</S.Titulo2>
   <S.Titulo2>E-mail: {email}</S.Titulo2>
   <S.Tag>{categoria}</S.Tag>
   <S.Descricao
    disabled={!Editando}
    value={descricao}
    onChange={(e) => setDescricao(e.target.value)}
   ></S.Descricao>
   <S.BarraAcoes>
    {Editando ? (
     <>
      <BotaoSalvar
       onClick={() => {
        dispatch(editar({ descricao, titulo, categoria, telefone, email, id }))
        setEditando(false)
       }}
      >
       Salvar
      </BotaoSalvar>
      <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
     </>
    ) : (
     <>
      <Botao onClick={() => setEditando(true)}>Editar</Botao>
      <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
       Remover
      </S.BotaoCancelar>
     </>
    )}
   </S.BarraAcoes>
  </S.Card>
 )
}
