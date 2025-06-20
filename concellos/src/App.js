import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import OndeEstaPage from './pages/OndeEstaPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visitados" element={<MapPage />} />
        <Route path="/onde" element={<OndeEstaPage />} />
      </Routes>
    </Router>
  );
}
