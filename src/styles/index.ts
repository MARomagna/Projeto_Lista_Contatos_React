import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
*{margin:0px;padding:0px; box-sizing: border-box;
 ;text-decoration:none; list-style: none;
}`
export const Container = styled.div`
 display: grid;
 grid-template-columns: 224px auto;
`
export const H1 = styled.h1`
 text-align: center;
 margin-top: 20px;
`
export const ContainerMain = styled.main`
 padding: 0px 40px;
 height: 100vh;
 overflow-y: scroll;
`
export const Titulo = styled.h2`
 margin-top: 10px;
 display: block;
 color: rgb(60, 60, 247);
`
export const Imput = styled.input`
 border-radius: 8px;
 padding: 8px;
 background-color: #fff;
 border-color: #666666;
 font-weight: bold;
 width: 100%;
`
export const Botao = styled.button`
 font-size: 12px;
 color: #fff;
 font-weight: bold;
 padding: 8px 12px;
 border: none;
 cursor: pointer;
 background-color: #2f3640;
 border-radius: 8px;
 margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
 background-color: ${variaveis.verde};
`
