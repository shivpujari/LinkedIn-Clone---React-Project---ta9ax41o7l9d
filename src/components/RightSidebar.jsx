import React from 'react'
import { useState } from 'react';
import imgTwoLadies from '../Images/twoLadies.png'
import '../styles/home.css'

function RightSidebar() {
    const [value, setValue] = useState(true);
  const [value2, setValue2] = useState(true);

  const handleOne=()=>{
    setValue(!value)
    alert("Started Following")
  }
  const handleTwo=()=>{
    setValue2(!value2)
    alert("Started Following")
  }
  return (
    <div>
    <div className='RightSideBar'>
    <div className='upperRight'>
      <h5>Add to Your Feed</h5>
      <p>#Linkedln</p>
     
      <button onClick={handleOne}> { value ? "Follow" : "Unfollow" }  </button>
      <p>#Website</p>
      <button onClick={handleTwo}> { value2 ? "Follow" : "Unfollow" }  </button>

      <a href=''>View all Recommendations</a>
    </div>
    <div className='middleRight'>
      <img src={imgTwoLadies} />
    </div>
    <div className='lowerRight'>
      <h4>Design and develop by Shivani</h4>
      <a href=''>Github profile link</a>
    </div>
  </div>
    </div>
  )
}

export default RightSidebar