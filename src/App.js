import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import ModelApp from './ModelApp'
import ModelAppShort from './ModelAppShort'
import VidoeLoader from './VidoeLoader'
import StreamedianPlayer from './StreamedianPlayer'
import Home from './Home'

function App({ id, url }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stream" element={<StreamedianPlayer id={id}>{<source src={url} type="application/x-rtsp" />}</StreamedianPlayer>} />
        <Route path="/video" element={<VidoeLoader />} />
        <Route path="/model" element={<ModelApp />} />
        <Route path="/mode1" element={<ModelAppShort />} />
      </Routes>
    </Router>
  )
}

export default App
