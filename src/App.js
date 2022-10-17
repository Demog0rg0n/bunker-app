import React from 'react';

import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import PlayerPage from './pages/PlayerPage';
import Webcams from './components/Webcams';
import SettingsPage from './pages/SetingsPage';

import { setPlayers } from './redux/slices/playerSlice';

import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  async function fetchPlayers() {
    try {
      const { data } = await axios.get('http://localhost:5000/players');
      dispatch(setPlayers(data));
      await fetchPlayers();
    } catch (e) {
      console.log(e);
      setTimeout(() => {
        fetchPlayers();
      }, 1000);
    }
  }
  React.useEffect(() => {
    fetchPlayers();
  }, []);

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
