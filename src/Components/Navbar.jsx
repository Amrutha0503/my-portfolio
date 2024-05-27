import React, { useState , useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom' 
import '../Components/Navbar.css'
import {Reorder} from '@mui/icons-material'

export function Navbar() {
  const [expandNavabr , setexpandNavbar] = useState(false)
  const location = useLocation();

  useEffect(() => {
    setexpandNavbar(false);
  }, [location]);
  return (
    <div className='navbar' id= {expandNavabr ? 'open' : 'close'}>
      <div className='togglebutton'>
        <button onClick={()=>{setexpandNavbar((previous) => !previous)}}> <Reorder/> </button>
      </div>

      <div className='links'>
        <Link to='/'> Home </Link>
        <Link to='/projects'> Projects </Link>
        <Link to='/experience'> Experience </Link>

      </div>
    </div>
  )
}
