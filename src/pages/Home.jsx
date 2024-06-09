import React from 'react'
import '../styles/Home.css'
import myimage from '../assets/myimage.jpeg'

export function Home() {
  return (
    
      <div className='home'>
        <div className='name'>
          <h1>Hi there , I am Amrutha</h1>
          <div className='myimage'>
            <img src={myimage} />
          </div>
        </div>

        <div className='skills'>
          <h1>A skilled and experienced front-end developer with a passion for creating immersive digital experiences.</h1>

          <ol className='lists'>
            <li>
              <h2>Front-End</h2>
              <span>ReactJS,Redux, HTML, CSS,BootStrap, MaterialUI.</span>
            </li>
            <li>
              <h2>Back-End</h2>
              <span> NodeJS,MySQL.</span>
            </li>
            <li>
              <h2>Languages</h2>
              <span>JavaScript, C ,Java, Python.</span>
            </li>
          </ol>
        </div>

      </div>
  )
}


