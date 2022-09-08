import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Home from './components/Home';
import { Artist } from './components/Artist';
import { Album } from './components/Album';

const App = () => {

    return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/songlist" element={<List />} />
            <Route path="/artist_details" element={<Artist />} />
            <Route path="/album_details" element={<Album />} />
          </Routes>
        <Footer />
        </BrowserRouter>
    );
}

export default App;
