import './App.css';
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home';
import Demo from './pages/Demo';
import Keyfeature from './pages/Keyfeature';
import Pricing from './pages/Pricing ';
import Testmonials from './pages/Testmonials';
import Navbar from './Navbar/Navbar';

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/features",
      element: <Keyfeature />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    {
      path: "/testimonials",
      element: <Testmonials />
    },
    {
      path: "/demo",
      element: <Demo />
    },
  ])
  return (
    <div className="container">
      <Navbar />
      {routes}
    </div>
  );
}

export default App;
