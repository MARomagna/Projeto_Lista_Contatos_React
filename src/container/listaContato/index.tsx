import { useSelector } from 'react-redux'
import { Contato } from '../../componets/Contato'
import { RootReducer } from '../../store'
import { ContainerMain, Titulo } from '../../styles'
export const ListaContato = () => {
 const { itens } = useSelector((state: RootReducer) => state.contatos)
 const { termo, valor } = useSelector((state: RootReducer) => state.filtro)
 const filtraContatos = () => {
  let contatosFiltrado = itens
  if (termo !== undefined) {
   return itens.filter(
    (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
   )
   if (valor === 'familia') {
    contatosFiltrado = contatosFiltrado.filter(
     (item) => item.categoria === valor
    )
   }
   return contatosFiltrado
  } else {
   return itens
  }
 }
 const exibiResultadoContatos = (qtd: number) => {
  let mensagem = ''
  const complementacao =
   termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''
  if (valor === 'todos contatos') {
   mensagem = `${qtd} contato(s) encontrada(s) como: ${complementacao}`
  } else {
   mensagem = `${qtd} contato(s) encontrada(s) como: "${`${valor}`}" ${complementacao}`
  }
  return mensagem
 }
 const contatos = filtraContatos()
 const mensagem = exibiResultadoContatos(contatos.length)
 return (
  <ContainerMain>
   <Titulo as='p'>{mensagem}</Titulo>
   <ul>
    {contatos.map((c) => (
     <li key={c.titulo}>
      <Contato
       descricao={c.descricao}
       titulo={c.titulo}
       telefone={c.telefone}
       email={c.email}
       categoria={c.categoria}
       id={c.id}
      />
     </li>
    ))}
   </ul>
  </ContainerMain>
 )
}
