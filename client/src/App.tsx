
import Login from './auth/Login'
import  {createBrowserRouter, RouterProvider} from "react-router-dom";

import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import VerifyEmail from './auth/VerifyEmail';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/ui/HeroSection';
import MainLayout from './layout/MainLayout';
 
const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
     {
      path:"/",
      element:<HeroSection/>
     }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgetpassword",
    element:<ForgotPassword/>
  },
  {
    path:"/resetpassword",
    element:<ResetPassword/>
  },
  {
    path:"/verifyemail",
    element:<VerifyEmail/>
  },
 
])

function App() {


  return (
    <>
     <main>
      <RouterProvider router={appRouter}>

      </RouterProvider>
     </main>
    </>
  )
}

export default App
