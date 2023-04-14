import React from 'react'
import '../styles/mynetwork.css'
import newtonLogo from '../newton.jpg'
import Navbar from './Navbar'
import LeftSideBar from './LeftSideBar'

const information = [
  {
    name: "SATYA NADELA",
    job: "CEO OF MICROSOFT",
    follower: 201411,
    srcs: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/1200px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg"
  },
  {
    name: "ISHITA NASSA",
    job: "HR CONSULTANT AT PORSPER",
    follower: 101411,
    srcs: "https://i.pinimg.com/736x/db/a9/ce/dba9ce433113b68e719456b6d78c4f2a.jpg"

  },
  {
    name: "ADITYA ROY KAPOOR",
    job: "HR CONSULTANT AT TESLA",
    follower: 21411,
    srcs: "https://wikibio.in/wp-content/uploads/2019/02/Aditya-Roy-kapoor-image.jpg"

  }

]


function MyNetwork() {

  const handleClick = () => {
    alert("Started Following")
  }
  const handleAccept = () => {
    alert("Accepted Request")
  }
  const handleIgnore = () => {
    alert("Ignored Request")
  }


  return (
    <div>
      <Navbar />
      <div className='networkLink'>
        <LeftSideBar />
        <div className='networkRight'>
          <div className='divWithNewtonlogo'>
            <h3>Invitations</h3>
            <hr></hr>
            <img src={newtonLogo} />
            <p>Newton School invited you to subscribe to The Newton Periodical</p>
            <button onClick={handleIgnore}>Ignore</button>
            <button onClick={handleAccept}>Accept</button>
          </div>
          <div className='celebrationDiv'>
            <h4>Celebration</h4>
            <p>Job changes, Birthdays, Work anniversaries</p>
          </div>
          <div className='divWithFollow'>
            {
              information.map((data) => (
                <div className='followinDIv'>
                  <div className='followImg'>
                    <img src={data.srcs} />
                  </div>
                  <h4>{data.name}</h4>
                  <h6>{data.job}</h6>
                  <p>{data.follower} follower</p>
                  <button onClick={handleClick}>  Follow</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyNetwork