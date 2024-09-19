import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Clients from './pages/Clients.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ImageDetail from './pages/ImageDetail.jsx'; // New Image Detail Page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
      { path: "clients", element: <Clients /> },
      { path: "project/:id", element: <ProjectDetail /> }, // Use project name as ID
      { path: "project/:id/image/:imageId", element: <ImageDetail /> }, // New route for image details
    ],
  },
]);

export default router;
