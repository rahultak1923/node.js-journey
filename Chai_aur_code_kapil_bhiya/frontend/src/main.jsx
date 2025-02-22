import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowComponents from './components/ShowComponents.jsx'




export default function Index(){
  return(
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/show' element={<ShowComponents/>}/>
    </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  Index()
)
