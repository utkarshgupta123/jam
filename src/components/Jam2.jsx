import React from 'react'
import './jam.css'

const Jam2 = () => {
  return (
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part2'>
                <div><img src="1.jpg" alt="" className='jamPart2'/></div>
                <div><img src="2.jpg" alt="" className='jamPart3' /></div>
            </div>
            <div className='foot1'>
                <div><img src='snip1.png' alt="" className='footHed' /></div>
                <button className='endJam1'>End Jam</button>
                <div className='speaker'><i class="fa-solid fa-volume-high"></i></div>
                <div className='video'><i class="fa-solid fa-video"></i></div>
                <div className='mic'><i class="fa-solid fa-microphone-slash"></i></div>
            </div>
         </div>
    </div>
  )
}

export default Jam2