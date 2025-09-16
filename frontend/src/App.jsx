// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../src/pages/Planos/Home'
import Sobre from '../src/pages/Planos/Sobre'
import Contato from '../src/pages/Planos/Contato'
import AboutSection from './components/AboutSection'
import CardSection from './components/CardSection'
import Matricula from '../src/pages/Planos/Matricula'
import Login from '../src/pages/Planos/Login'
import PagePlanos from './pages/Planos/Planos'

export default function App(){
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar/>
      <main className="flex-grow-1" style={{marginTop: '70px'}}>
        <Routes>
          <Route path="/" element={ 
           <>
           <Home/>
           <AboutSection/>
           <CardSection/>
           </> }
            />
          
          <Route path="/contato" element={<Contato/>} />
          <Route path="/Matricula" element={<Matricula/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/PagePlanos" element={<PagePlanos/>} />
          
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
