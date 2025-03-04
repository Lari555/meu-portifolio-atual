import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/template/Header.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import SobreMim from './pages/SobreMim.jsx';
import Contato from './pages/Contato.jsx';
import './custom.css'

const router = createBrowserRouter([
{
    path: "/",
    element:<Home/>
  },
  {
    path: "SobreMim",
    element: <SobreMim/>

  },
  {
    path: "Contato",
    element:<Contato/>
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
  </StrictMode>

)
