import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import Navigation from './components/Navigation/Navigation'
import ContactPage from './components/ContactPage/ContactPage'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import UsersPage from './components/UsersPage/UsersPage'
import UserProfilePage from './components/UserProfilePage/UserProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navigation />
      <Routes>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/users' element={<UsersPage/>} />
        <Route path='/user/:id' element={<UserProfilePage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

    </div>
    <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
    </>
  )
}

export default App
