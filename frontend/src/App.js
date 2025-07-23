import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TokenCreator from './pages/TokenCreator';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import Locker from './pages/Locker';
import Claim from './pages/Claim';
import Leaderboard from './pages/Leaderboard';
import Promoted from './pages/Promoted';
import KYC from './pages/KYC';
import Referral from './pages/Referral';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<TokenCreator />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/staking' element={<Staking />} />
        <Route path='/locker' element={<Locker />} />
        <Route path='/claim' element={<Claim />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/promoted' element={<Promoted />} />
        <Route path='/kyc' element={<KYC />} />
        <Route path='/referral' element={<Referral />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
}
