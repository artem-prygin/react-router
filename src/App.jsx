import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import React from 'react';
import Home from './pages/Home';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanOutlet from './pages/host/HostVanOutlet';
import HostVansDetails from './pages/host/HostVanDetails';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"
                 element={<Layout />}>
            <Route index
                   element={<Home />} />
            <Route path="about"
                   element={<About />} />

            <Route path="vans">
              <Route index
                     element={<Vans />} />
              <Route path=":id"
                     element={<VanDetail />} />
            </Route>

            <Route path="host"
                   element={<HostLayout />}>
              <Route index
                     element={<Dashboard />} />
              <Route path="income"
                     element={<Income />} />
              <Route path="reviews"
                     element={<Reviews />} />
              <Route path="vans"
                     element={<HostVans />} />
              <Route path="vans/:id"
                     element={<HostVanOutlet />}>
                <Route index
                       element={<HostVansDetails />} />
                <Route path="pricing"
                       element={<HostVanPricing />} />
                <Route path="photos"
                       element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
