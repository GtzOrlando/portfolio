import './App.css'
import Navbar from './components/Navbar.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import NavbarMobile from './components/NavbarMobile.jsx'

function App() {

  return (
    <>
      <NavbarMobile />
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default App
