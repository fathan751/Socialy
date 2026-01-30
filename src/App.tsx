import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/RegisterPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import LoginPage from "./pages/LoginPage"
import FeedPage from "./pages/FeedPage"
import ProtectedRoute from "./guards/ProtectedRoute"
import ProfilePage from "./pages/ProfilePage"
import CreatePostPage from "./pages/CreatePostPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path={`/profile/:id`} element={<ProfilePage/>}/>
            <Route path="/create" element={<CreatePostPage/>}/>
            <Route path="/create/:type" element={<CreatePostPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColors theme="light" position="bottom-right"/>
    </>
  )
}

export default App