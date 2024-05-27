import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import { Mail } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import '../Components/Footer.css'

export function Footer() {
  return (
    <div className='footer'>
      <h4>connect with Amrutha ! </h4>
      <div className='socialmedia'>
        <p><GitHub />github.com/Amrutha0503</p>
        <p><LinkedIn />linkedin.com/in/amrutha-valli-gaddalapati</p>
        <p><Mail />amruthavalli503@gmail.com</p>
      </div>
      <p> &copy; 2024 Amruthavalli.com</p>
    </div>
  )
}
