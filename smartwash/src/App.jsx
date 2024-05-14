import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Transport';
import MyRequests from './pages/MyRequests';
import Profile from './pages/Profile';
import Navigation from './components/Navigation';
import Header from './components/Header';
import FindLaundries from './pages/FindLaundries';
import Lavandeira from './pages/Lavandeira';
import Transport from './pages/Transport';
import ReserveMachines from './pages/ReserveMachines';
import Payment from './pages/Payment';
import EscolhaTransporte from './pages/EscolhaTransporte';
import LaundriesTransport from './pages/LaundriesTransport'; // Importe a página LaundriesTransport
import LavandeiraTransport from './pages/LavandeiraTransport';
import PaymentTransport from './pages/PaymentTransport';
import ReserveMachinesTransport from './pages/ReserveMachinesTransport';

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
          <Route path="/EscolhaTransporte" element={<EscolhaTransporte />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/ReserveMachines" element={<ReserveMachines />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/PaymentTransport" element={<PaymentTransport />} />
          <Route path="/LaundriesTransport" element={<LaundriesTransport />} /> {/* Adicione esta linha */}
          <Route path="/LavandeiraTransport" element={<LavandeiraTransport />} />
          <Route path="/ReserveMachinesTransport" element={<ReserveMachinesTransport />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
