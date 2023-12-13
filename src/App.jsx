import { TableTasaDeCambio } from './components/TableTasaDeCambio'
import { Menu } from './components/Menu'
import { AppRoutes } from './AppRoutes'

function App() {

  return (
    <>
      <div className='container' >
          <div className='row'>
            <Menu />
            <AppRoutes />
          </div>
      </div>
    </>
  )
}

export default App
