import './styles/global.css'
import { LanguageProvider } from './context/LanguageContext'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import CaseOverview from './components/sections/CaseOverview'
import Problem from './components/sections/Problem'
import MyRole from './components/sections/MyRole'
import Solution from './components/sections/Solution'
import Artifacts from './components/sections/Artifacts'
import Results from './components/sections/Results'
import HowIWork from './components/sections/HowIWork'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <CaseOverview />
        <Problem />
        <MyRole />
        <Solution />
        <Artifacts />
        <Results />
        <HowIWork />
        <Contact />
      </main>
    </LanguageProvider>
  )
}
