import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
 background-color: #fcfcfc;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 padding: 16px;
 margin-bottom: 32px;
 border-radius: 16px;
`
export const Titulo = styled.h3`
 font-weight: bold;
 font-size: 18px;
 margin-bottom: 16px;
`
export const Titulo2 = styled.h3`
 font-weight: bold;
 font-size: 12px;
 margin-bottom: 16px;
`
export const Tag = styled.span`
 padding: 4px 8px;
 font-size: 16px;
 font-weight: bold;
 color: #fff;
 background-color: #e1a32a;
 border-radius: 8px;
 margin-right: 16px;
 display: inline-block;
`
export const Descricao = styled.textarea`
 color: #8b8b8b;
 font-size: 14px;
 line-height: 24px;
 font-family: 'Courier New', Courier, monospace;
 display: block;
 margin-bottom: 16px;
 margin-top: 16px;
 resize: none;
 border: none;
 background-color: transparent;
 width: 100%;
`
export const BarraAcoes = styled.div`
 border-top: 1px solid rgba(0, 0, 0, 0.1);
 padding-top: 16px;
`
export const BotaoCancelar = styled(Botao)`
 background-color: ${variaveis.vermelho};
`
