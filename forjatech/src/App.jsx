import { useState } from 'react'
import Inicio from './components/Inicio/Inicio';
import Sobre from './components/Sobre/Sobre';

function App() {
  const [page, setPage] = useState(1)
  return (
    <>
      {(page === 1)
      ?(
        <Inicio setPage={setPage} />
      )
      :(
        <Sobre />
      )}
    </>
  )
}

export default App
