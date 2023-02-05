import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Color from '../Pages/Color'
import Grid from '../Pages/Grid'
import Intro from '../Pages/Intro'
import Typo from '../Pages/Typo'


const Content = () => {
  return (
      <>
        <Routes>
          <Route path="/" index element={<Intro />} />
          <Route path="color" element={<Color />} />
          <Route path="typo" element={<Typo />} />
          <Route path="grid" element={<Grid />} />
        </Routes>
      </>
  )
}

export default Content