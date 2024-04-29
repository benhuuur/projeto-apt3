import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home.jsx'
import ImagesProduct from './components/ImagesProduct/ImagesProduct.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sla",
    element: <ImagesProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
