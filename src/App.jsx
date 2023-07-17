import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import About from './pages/About';
import React from 'react';
import Home from './pages/Home';
import Vans, { loader as vansLoader } from './pages/vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans, { loader as hostVansLoader } from './pages/host/HostVans';
import HostVanPricing from './pages/host/HostVanPricing';
import HostVanPhotos from './pages/host/HostVanPhotos';
import HostVanOutlet, { loader as hostVanOutletLoader } from './pages/host/HostVanOutlet';
import HostVansDetails, { loader as hostVanDetailsLoader } from './pages/host/HostVanDetails';
import NotFound from './pages/NotFound';
import Error from './pages/Error';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';
import { requireAuth } from './utils/utils';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
           element={<Layout />}>
      <Route index
             element={<Home />} />
      <Route path="about"
             element={<About />} />
      <Route path="login"
             errorElement={<Error />}
             action={loginAction}
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
             errorElement={<Error />}
             element={<HostLayout />}>
        <Route index
               loader={async () => await requireAuth()}
               element={<Dashboard />} />
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
                 loader={hostVanDetailsLoader}
                 element={<HostVansDetails />} />
          <Route path="pricing"
                 loader={async () => await requireAuth()}
                 element={<HostVanPricing />} />
          <Route path="photos"
                 loader={async () => await requireAuth()}
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
