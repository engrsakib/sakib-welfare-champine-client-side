import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='container mx-auto'>
        <Header></Header>
      </header>
      <main className='container mx-auto'>
        
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default App
