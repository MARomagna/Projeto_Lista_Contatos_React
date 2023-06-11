import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Container, EstiloGlobal, H1 } from './styles'
import { store } from './store'
import { Home } from './pages/Home'
import { Cadastro } from './pages/Cadastro'
const rotas = createBrowserRouter([
 { path: '/', element: <Home /> },
 { path: '/novo', element: <Cadastro /> }
])
function App() {
 return (
  <Provider store={store}>
   <EstiloGlobal />
   <H1>
    <img width={28} height={22} src='/agenda.svg' alt='' />
    Lista Contatos
   </H1>
   <Container>
    <RouterProvider router={rotas} />
   </Container>
  </Provider>
 )
}

export default App
