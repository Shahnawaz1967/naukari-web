import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-xl font-bold underline bg-red-600">
      Hello world!
    </h1>
    </>
  )
}

export default App
