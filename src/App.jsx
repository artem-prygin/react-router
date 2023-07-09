import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import About from './pages/About';
import React from 'react';
import Home from './pages/Home';
import Vans, { loader as vansLoader } from './pages/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanOutlet, { loader as hostVanOutletLoader } from './pages/host/HostVanOutlet';
import HostVansDetails from './pages/host/HostVanDetails';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import { requireAuth } from './utils';
import Login, { loader as loginLoader } from './pages/Login';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
           element={<Layout />}
           errorElement={<Error />}>
      <Route index
             element={<Home />} />
      <Route path="about"
             element={<About />} />
      <Route path="login"
             loader={loginLoader}
             element={<Login />} />

      <Route path="vans">
        <Route index
               loader={vansLoader}
               element={<Vans />} />
        <Route path=":id"
               loader={vanDetailLoader}
               element={<VanDetail />} />
      </Route>

      <Route path="host"
             element={<HostLayout />}
             loader={async () => await requireAuth()}>
        <Route index
               element={<Dashboard />}
               loader={async () => await requireAuth()} />
        <Route path="income"
               loader={async () => await requireAuth()}
               element={<Income />} />
        <Route path="reviews"
               loader={async () => await requireAuth()}
               element={<Reviews />} />
        <Route path="vans"
               loader={hostVansLoader}
               element={<HostVans />} />
        <Route path="vans/:id"
               loader={hostVanOutletLoader}
               element={<HostVanOutlet />}>
          <Route index
                 loader={async () => {
                   await requireAuth();
                   return null;
                 }}
                 element={<HostVansDetails />} />
          <Route path="pricing"
                 element={<HostVanPricing />} />
          <Route path="photos"
                 loader={async () => {
                   await requireAuth();
                   return null;
                 }}
                 element={<HostVanPhotos />} />
        </Route>
      </Route>

      <Route path="*"
             element={<NotFound />} />
    </Route>,
));

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
