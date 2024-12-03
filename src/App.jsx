import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="container mx-auto">
        <Header></Header>
      </header>
      <main className="container mx-auto min-h-screen"></main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App
