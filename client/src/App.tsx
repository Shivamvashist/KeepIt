import { useEffect } from "react"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { HomePage } from "./pages/Homepage"
import { Login } from "./pages/LoginPage"
import { SignUp } from "./pages/SignupPage"
import { Stash } from "./pages/Stash"
import { checkAuth } from "./utils/checkAuth"
// import { AnimatePresence } from "framer-motion"
import { useSetRecoilState } from "recoil"
import { authState } from "./state/auth.recoil"

function App() {

  const setAuth = useSetRecoilState(authState);

  useEffect(()=>{
    async function authInit(){
      const authData = await checkAuth();
      setAuth({...authData,loading:false});
    }
    authInit()
  })

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
