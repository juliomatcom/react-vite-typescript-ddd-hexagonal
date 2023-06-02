import { Outlet } from 'react-router-dom'
import './App.css'
import hello from '../application/hello'
import CarContext from './contexts/carContext';
import useCars from './hooks/useCars';

function App() {
  const { carsState } = useCars();

  return (
    <CarContext.Provider value={carsState}>
      <>
      <div className="App">
        <header className="App-header">
          {hello.getSalute()}
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          footer
        </footer>
      </div>
      </>
    </CarContext.Provider>
  )
}

export default App
