import React from 'react'
import Homepage from './Homepage'
import {Routes, Route} from 'react-router-dom';


export default function App() {
    // const apiKey= import.meta.env.VITE_API_KEY;
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
    <div>App</div>
    </>
  )
}
