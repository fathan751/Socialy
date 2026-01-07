import Landing from "./pages/Landing"
import Register from "./pages/Register"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Toaster } from "./components/ui/sonner"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="light" position="bottom-right"/>
    </>
  )
}

export default App