import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PageEnveloper } from './components/PageEnveloper.jsx'
import { ProductsPage } from './pages/ProductsPage.jsx'
import { ApiPage } from './pages/ApiPage.jsx'
import { MapPage } from './pages/MapPage.jsx'
import { GraphicPage } from './pages/GraphicPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PageEnveloper><ProductsPage/></PageEnveloper>
  },
  {
    path: "/products",
    element: <PageEnveloper><ProductsPage/></PageEnveloper>
  },
  {
    path: "/apirick",
    element: <PageEnveloper><ApiPage/></PageEnveloper>
  },
  {
    path: "/map",
    element: <PageEnveloper><MapPage/></PageEnveloper>
  },
  {
    path: "/graphics",
    element: <PageEnveloper><GraphicPage/></PageEnveloper>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)