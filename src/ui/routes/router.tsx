
import {  createBrowserRouter} from "react-router-dom"
import App from '../App'
import Home from "../pages/Home"
import Car from "../pages/Car"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars/:id",
        element: <Car />,
      },
    ],
  },
])

export default router
