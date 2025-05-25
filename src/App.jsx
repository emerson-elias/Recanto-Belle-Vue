import { RouterProvider } from "react-router-dom"
import rotas from "./routes"

import "./global.scss"

import { LoadingGlobal } from '../src/loading/loadingGlobal.jsx'

function App() {
  return (
    <>
      <LoadingGlobal />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App