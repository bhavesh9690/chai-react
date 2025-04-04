import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 text-center m-auto">
      <h1 className="font-bold">Vite + React</h1>
      <div className="card">
        <h1 className="m-2">{count}</h1>
        <button className="border-2 rounded-xl p-2 m-2 cursor-pointer" onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <button className="border-2 rounded-xl p-2 m-2 cursor-pointer" onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default App
