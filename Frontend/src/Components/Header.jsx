import React from 'react'
import '../App.css'
import logo from '../assets/logo2.png'
function Header() {
  return (
          <div className='shadow fixed top-0 w-full bg-white'>
          <nav className='center py-3 flex items-center justify-between'>
              <div>
                  <img src={logo} alt="" className="w-auto  h-13" />
              </div>
    
      
      <div className='flex gap-6 w-300px'>
      <a href="#" className="hover:text-[#0f80a5]">Services</a>
      <a href="#" className="hover:text-[#0f80a5]">About</a>
       <a href="#" className="hover:text-[#0f80a5]">Contact</a>
    
    </div>
        


<div className='flex gap-3'>
      <a href="#" className="px-4  flex items-center py-2 border rounded-full bg-[#0f80a5] text-white ">Login</a>
      <a href="#" className="px-4 py-2  flex items-center border rounded-full bg-[#0f80a5] text-white">Sign Up</a>
   </div>
          </nav>
          </div>
    
  )
}

export default Header;