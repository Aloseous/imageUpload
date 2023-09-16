import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ImageUpload/>
    </div>
    </>
  )
}

export default App
