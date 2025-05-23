import React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';


export default function App() {
    // const apiKey= import.meta.env.VITE_API_KEY; // This is how you access your API key in the *frontend*
  return (
    <>
    <Routes>
      <Route path='/' element= {<HomePage />} />
      {/* <Route path='/Login' element= {<HomePage />} />
      <Route path='/Registration' element= {<HomePage />} />
      <Route path='/Assessment' element= {<HomePage />} />
      <Route path='/Results' element= {<HomePage />} /> */}
    </Routes>
    {/* <div>App</div> */}
    </>
  )
}









// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
