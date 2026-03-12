import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.jsx'
import CardPage from './pages/card/CardPage.jsx'
import SliderPage from './pages/slider/SliderPage.jsx'
import SwitchPage from './pages/switch/SwitchPage.jsx'
import CarouselPage from './pages/carousel/CarouselPage.jsx'
import Navbar from './components/navbar/navbar.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/carousel" element={<CarouselPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

