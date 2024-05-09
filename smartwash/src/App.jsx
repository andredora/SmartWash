import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Transport'
import MyRequests from './pages/MyRequests'
import Profile from './pages/Profile'
import Navigation from './components/Navigation'
import Header from './components/Header'
import FindLaundries from './pages/FindLaundries'
import Lavandeira from './pages/Lavandeira'
import Transport from './pages/Transport'
import ReserveMachines from './pages/ReserveMachines'


function App() {

  return (
    <div className='h-screen max-h-screen p-4 overflow-x-hidden max-w-screen bg-base-100 flex flex-col align-middle'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myrequests" element={<MyRequests />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/FindLaundries" element={<FindLaundries />} />
          <Route path="/Lavandeira" element={<Lavandeira />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/ReserveMachines" element={<ReserveMachines />} />

        </Routes>
          <Navigation />
      </Router>
    </div>
  )
}

export default App
