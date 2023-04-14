import React from 'react'
import '../styles/msg.css'
import Navbar from './Navbar'
import RightSidebar from './RightSidebar'
import LeftSideBar from './LeftSideBar'


const infoMsg = [
  {
    h1: "Amazon",
    p: "Hey ShivaniGreetings from Amazon! We’re home to lakhs of sellers and give them access to crores of customers to fast track their growth."
  },
  {
    h1: "Diane John",
    p: "Hi there, Shivani! My name is Diane from the LinkedIn Premium team and I’d like to invite you to try Premium for free. We’ve recently seen an increase in job postings that might be a good fit."

  },
  {
    h1: "Shilpa Dhaware",
    p: "Hi Shivani,I reviewed your application for our Network/Digital Marketing and I am impressed with your background. I’d like to schedule a call with you to discuss your experience."

  },

  {
    h1: "Harmeek Singh",
    p: "Dear Shivani I hope this message finds you well. I wanted to reach out to you because I know how valuable a Master's in Data Science can be for professionals looking to advance their careers in the tech industry."

  }
]


function Messaging() {
  let names = localStorage.getItem('name');

  return (
    <div>
      <Navbar />
      <div>
      </div>
      <div className='mainMsg'>
        <LeftSideBar />
        <div className='middleMsg'>
          {
            infoMsg.map((data) => (
              <div className='mapMsg'>
                <i className="fa fa-user-circle-o mes" >
                  <h3>{data.h1}</h3></i>
                <p>{data.p}</p>
              </div>
            ))
          }
        </div>
        <RightSidebar />
      </div>
    </div>
  )
}

export default Messaging