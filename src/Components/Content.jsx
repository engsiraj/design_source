import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Color from '../Pages/Color'
import Intro from '../Pages/Intro'


const Content = () => {
  return (
      <>
        <Routes>
          <Route path="/" index element={<Intro />} />
          <Route path="color" element={<Color />} />
        </Routes>
      </>
  )
}

export default Content