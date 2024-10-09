import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Flowers from './Flowers.jsx';
import Stores from './Stores.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/flowers",
    element: <Flowers />
  },
  {
    path: "/stores",
    element: <Stores />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
