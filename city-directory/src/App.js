import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ComparePage from './pages/ComparePage/ComparePage';
import CityPage from './pages/CityPage/CityPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';

export default class App extends React.Component {
  render() {
    return (
        <div className="app">
          <div className='app1'>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/cities/:id" element={<CityPage />} />
        </Routes>
        <Footer />
          </div>
        </div>
    );
  }
}