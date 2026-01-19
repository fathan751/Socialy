import Landing from "./pages/Landing"
import RegisterPage from "./pages/RegisterPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import LoginPage from "./pages/LoginPage"
import FeedPage from "./pages/FeedPage"
import ProtectedRoute from "./guards/ProtectedRoute"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path="/feeds" element={<FeedPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="light" position="bottom-right"/>
    </>
  )
}

export default App