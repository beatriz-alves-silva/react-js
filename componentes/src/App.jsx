//compontente pai

import { useState } from 'react'
import './App.css'

// importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import PropsExample from './components/PropsExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World React!</h1>
      <FunctionalComponent/>
      <PropsExample nome="Beatriz" idade={27}/>
    </>
  )
}

export default App
