import React from 'react'

const Jam3 = () => {
  return (
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part3'>
                <div><img src="1.jpg" alt="" className='imag1Jam' width="400" height="200"/></div>
                <div><img src="2.jpg" alt="" className='jamNewJam' width="430" height="400" /></div>
                <div><img src="3.jpg" alt="" className='jamN4Jam' width="400" height="200" /></div>
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

export default Jam3