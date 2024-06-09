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
        <a><GitHub />github.com/Amrutha0503</a>
        <a><LinkedIn />linkedin.com/in/amrutha-valli-gaddalapati</a>
        <a><Mail />amruthavalli503@gmail.com</a>
      </div>
      <p className='df'> Designed and developed by Amruthavalli</p>
    </div>
  )
}
