import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
{
  path: "/",
  element: <Layout />,
  errorElement: <ErrorPage />,
  children:[
    {index:true, element: <Home />}
  ]

}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
