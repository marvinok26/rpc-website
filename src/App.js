import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home />},
      {path: "about", element: <About />},
      {path: "services", element: <Services />},
      {path: "projects", element: <Projects />},
      {path: "contact", element: <Contact />},
    ]
  }
])

export default router