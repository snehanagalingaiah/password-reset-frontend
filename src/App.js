import Header from  "./components/Header"
import Login from  "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
import ErrorPage from "./components/ErrorPage"
import PasswordReset from "./components/PasswordReset"
import ForgotPasword from "./components/ForgotPassword"
import {Routes,Route} from "react-router-dom"

function App() {
  return (
   <>
   <Header />

   <Routes>

   <Route path = "/" element = {<Login />} />
   <Route path = "/register" element = {<Register />} />
   <Route path = "/dashboard" element = {<Dashboard />} />
   <Route path = "/password-reset" element = {<PasswordReset />} />
   <Route path = "/forgotpassword/:id/:token" element = {<ForgotPasword />} />
   <Route path = "*" element = {<ErrorPage />} />
   </Routes>

   
   </>
  );
}

export default App;
