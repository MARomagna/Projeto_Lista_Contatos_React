import { FormEvent, useState } from 'react'
import { BotaoSalvar, ContainerMain, Imput, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enuns/Contato'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router'

const Formulario = () => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const [titulo, setTitulo] = useState('')
 const [telefone, setTelefone] = useState('')
 const [email, setEmail] = useState('')
 const [descricao, setDescricao] = useState('')
 const [categoria, setCategoria] = useState('')
 const cadastrarContato = (e: FormEvent) => {
  e.preventDefault()
  const contatoAdd = new Contato(
   titulo,
   telefone,
   email,
   enums.Categoria.TODAS,
   descricao,
   1
  )
  dispatch(cadastrar(contatoAdd))
  navigate('/')
 }
 return (
  <ContainerMain>
   <Titulo>Novo Cadastro</Titulo>
   <Form onSubmit={cadastrarContato}>
    <Imput
     value={titulo}
     onChange={(e) => setTitulo(e.target.value)}
     name='categoria'
     type='text'
     placeholder='Nome'
    />
    <Imput
     value={telefone}
     onChange={(e) => setTelefone(e.target.value)}
     name='categoria'
     type='tel'
     placeholder='Telefone'
    />
    <Imput
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     name='categoria'
     type='email'
     placeholder='Email'
    />
    <Imput
     value={descricao}
     onChange={({ target }) => setDescricao(target.value)}
     as='textarea'
     placeholder='Descrição'
    />
    <Opcoes>
     <p>Categoria</p>
     {Object.values(enums.Categoria).map((categoria) => (
      <Opcao key={categoria}>
       <input
        value={categoria}
        name='categoria'
        type='radio'
        onChange={(e) => setCategoria(e.target.value as enums.Categoria)}
        id={categoria}
        defaultChecked={categoria === enums.Categoria.TODAS}
       />
       <label htmlFor={categoria}>{categoria}</label>
      </Opcao>
     ))}
    </Opcoes>
    <BotaoSalvar type='submit'>Cadastrar</BotaoSalvar>
   </Form>
  </ContainerMain>
 )
}
export default Formulario
