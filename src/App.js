import Header from './components/Header';

import { Routes, Route } from 'react-router';
import MainPage from './pages/MainPage';
import PlayerPage from './pages/PlayerPage';
import Webcams from './components/Webcams';
import SettingsPage from './pages/SetingsPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stream" element={<Webcams />} />
        <Route path="*" element={<PlayerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </>
  );
}

export default App;
