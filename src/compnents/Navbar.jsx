import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdQuestionAnswer } from "react-icons/md";
import { MdInfo } from "react-icons/md";

function Navbar() {
  return (
    <div className='flex justify-center w-full h-auto'>
      <nav className='flex justify-around items-center bg-[#2c2e31] m-5 text-white text-2xl font-thin p-2 rounded-lg w-full min-h-12'>
        <NavLink
          to='/'
          className={({ isActive }) => 
            `flex items-center gap-1 h-full ${isActive ? 'text-customYellow' : 'hover:text-customYellow'}`
          }
        >
          <IoMdHome /> <p>Home</p>
        </NavLink>
        
        <NavLink
          to='/playlisthub'
          className={({ isActive }) => 
            `flex items-center gap-1 h-full ${isActive ? 'text-customYellow' : 'hover:text-customYellow'}`
          }
        >
          <RiPlayList2Fill /> <p>Playlist Hub</p>
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) => 
            `flex items-center gap-1 h-full ${isActive ? 'text-customYellow' : 'hover:text-customYellow'}`
          }
        >
          <MdInfo /> <p>About</p>
        </NavLink>
        
        <NavLink
          to='/contactUs'
          className={({ isActive }) => 
            `flex items-center gap-1 h-full ${isActive ? 'text-customYellow' : 'hover:text-customYellow'}`
          }
        >
          <MdQuestionAnswer /> <p>Contact Us</p> 
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar;
