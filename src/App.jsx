import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import LogoSection from './sections/LogoSection'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import Experience from './sections/Experience'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <Experience />
    </>
  )
}

export default App
