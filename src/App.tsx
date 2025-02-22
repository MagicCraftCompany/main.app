import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepagemcrt from './pages/Homepagemcrt'
import Homepagegames from './pages/HomePageGames'
import Support from './pages/Support'
import GamePatch from './pages/GamePatch'
import Homepagemagicrunner from './pages/HomePageMagicRunner'
import Homepagemagic8ball from './pages/HomePageMagic8Ball'
import Hero from './pages/Hero'
import ChooseYourHero from './pages/ChooseYourHero'
import Server from './pages/serverStatus'
import TermsAndConditions from './pages/TermsAndCondition'
import Studios from './pages/Studios'
import NewsPage from './pages/McNews'
import  PrivacyPolicy  from './pages/PrivacyPolicy'
import  Disclaimer  from './pages/Disclaimer'
import Verify from './pages/Verify'
import LeaderboardPage from './pages/LeaderBoard'
import HoldersPage from './pages/TopHolders'
import Dashboard from './pages/Dashboard'
import GameDeveloper from './pages/GameDeveloper'
import NotFound from './pages/ErrorPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepagemcrt />}></Route>
        <Route path="/magiccraft" element={<Homepagegames />}></Route>
        <Route path="/magicrunner" element={<Homepagemagicrunner />}></Route>
        <Route path="/magic8ball" element={<Homepagemagic8ball />}></Route>
        <Route path="/hero" element={<Hero />}></Route>
        <Route path="/Chooseyourhero" element={<ChooseYourHero/>}></Route>
        <Route path="/faq" element={<Support />}></Route>
        <Route path="/patch" element={<GamePatch />}></Route>
        <Route path="/studios" element={<Studios />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/build-on-magiccraft" element={<GameDeveloper />}></Route>
        <Route path="/server" element={<Server />}></Route>
        <Route path="/terms" element={<TermsAndConditions />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/disclaimer" element={<Disclaimer />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
        <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
        <Route path="/topholders" element={<HoldersPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>


        <Route path="*" element={<NotFound />} />


       
      </Routes>
    </BrowserRouter>
  )
}

export default App
