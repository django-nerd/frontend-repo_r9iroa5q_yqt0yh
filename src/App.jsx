import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Creatives from './components/Creatives'
import AboutContact from './components/AboutContact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Showcase />
        <Services />
        <Creatives />
        <AboutContact />
      </main>
    </div>
  )
}

export default App
