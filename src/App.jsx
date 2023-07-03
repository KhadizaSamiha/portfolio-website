import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-3xl font-bold underline btn btn-outline">
      Hello world!
    </h1>
    </>
  )
}

export default App
