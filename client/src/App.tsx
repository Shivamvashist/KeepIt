import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { HomePage } from "./pages/Homepage"
import { Login } from "./pages/LoginPage"
import { SignUp } from "./pages/SignupPage"
import { Stash } from "./pages/Stash"
// import { AnimatePresence } from "framer-motion"

function App() {

  return (
    <div>
      <Toaster/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/stash" element={<Stash/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
