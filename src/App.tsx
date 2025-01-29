import { Route, Routes } from "react-router-dom"
import Inicio from "./views/client/inicio/inicio"
import Home from "./views/client/home/home"
import Auth from "./views/auth/auth/auth"
import Login from "./views/auth/login/login"
import Register from "./views/auth/register/register"




const App = ()=>{
  return <div className="w-screen h-screen flex overflow-x-hidden">
    <Routes>
      <Route path='/' element={<Auth/>}>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
      </Route>

      <Route path='home' element={<Home/>}>
        <Route path="inicio" element={<Inicio/>}></Route>
      </Route>
    </Routes>
  </div>
}


export default App