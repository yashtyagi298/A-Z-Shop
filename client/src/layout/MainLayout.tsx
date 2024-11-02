
import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'

import { Outlet } from 'react-router-dom'



const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen m-2 md:0 '>
      {/* Navbar */}
      <header>
        <Navbar/>
      </header>
      {/* main content */}
      <div className='flex-1'>
        <Outlet/>
      </div>
      <footer>
       <Footer/>
      </footer>
    </div>
  )
}

export default MainLayout