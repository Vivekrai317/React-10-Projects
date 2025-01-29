import './App.css'
import Hero from './Hero'
function App() {

  return (
    <>
    <nav className='container'>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li >Menu</li>
        <li >Location</li>
        <li >About</li>
        <li >Contact</li>
      </ul>
      <button>Login</button>
    </nav>
    <Hero/>
    </>
  )
}

export default App
