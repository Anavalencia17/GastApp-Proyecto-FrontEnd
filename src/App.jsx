import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  )
}

export default App