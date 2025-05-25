import { createBrowserRouter } from "react-router-dom"

import Home from "./routes/home.jsx"
import About from "./routes/about/about.jsx"

const rotas = createBrowserRouter([
   {
      path: "/",
      element: <Home />
   }
   ,
   {
      path: "/about",
      element: <About />
   }
])

export default rotas