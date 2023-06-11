export class Contato {
  titulo: string
  categoria: string
  descricao: string
  telefone: string
  email: string
  id: number
  constructor(
    titulo: string,
    categoria: string,
    descricao: string,
    telefone: string,
    email: string,
    id: number,
  ) {
    this.titulo = titulo
    this.categoria = categoria
    this.descricao = descricao
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}
export default Contato
