import React from 'react'
import '../styles/notificatio.css'
import red from '../Images/red.jpg'
import imgTwoLadies from '../Images/twoLadies.png'
import Navbar from './Navbar'
import RightSidebar from './RightSidebar'




const infoNoti = [
  {
    image: '../Images/red.jpg',
    p: "CodersBrain is hiring: React js developer. See this and 8 otherjob recommendations"
  },
  {
    p: "You appeared in 8 searches this week"
  },
  {
    p: "Ankur sahu posted: Do you want to increase you candidate response rate."
  },
  {
    p: "Infosys is hiring for FrontEnd Developer."

  },
  {
    p: "Using data in your resume can make is stand out. Here are some expert tips."
  },
  {
    p: "India Inc's pay hike report card; Generative AI makes waves; and other top news for you."

  }

]

function Notification() {
  return (
    <div>
      <Navbar />
      <div>
      </div>
      <div className='mainNotifications'>
        <div className='leftNoti'>
          <div className='upnoti'>
            <h4>Manage Your<br></br>
              Notifications</h4>
            <a href=''>View Settings</a>
          </div>
        </div>
        <div className='middleNoti'>
          {infoNoti.map((data) => (
            <div className='notiMap'>
              <img src={red} />
              <p>{data.p}</p>
            </div>
          ))}
        </div>
        <RightSidebar />
      </div>


    </div>
  )
}

export default Notification