import { BotaoAdd } from '../../componets/BotaoAdicionar'
import SideBar from '../../container/SideBar'
import { ListaContato } from '../../container/listaContato'

export const Home = () => (
 <>
  <SideBar mostarFiltro />
  <ListaContato />
  <BotaoAdd />
 </>
)
