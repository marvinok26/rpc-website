import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import MoreInfo from './pages/projects/MoreInfo.jsx';

// Lazy load components for better performance
const Layout = lazy(() => import('./components/Layout.jsx'));
const Home = lazy(() => import('./pages/Home'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const Clients = lazy(() => import('./pages/Clients.jsx'));
const ImageDetail = lazy(() => import('./pages/ImageDetail.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
        <Layout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <Services />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "clients",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <Clients />
          </Suspense>
        ),
      },
      {
        path: "project/:id/image/:imageId",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <ImageDetail />
          </Suspense>
        ),
      },
      {
        path: "project/:id",
        element: (
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><Loader /></div>}>
            <MoreInfo />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
