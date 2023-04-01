import React from 'react'
import '../styles/msg.css'
import imgTwoLadies from '../Images/twoLadies.png'
import Navbar from './Navbar'


const infoMsg=[
    { 
        h1:"Amazon",
        p:"Hey ShivaniGreetings from Amazon! We’re home to lakhs of sellers and give them access to crores of customers to fast track their growth."
    },
    {   h1: "Diane John",
        p:"Hi there, Shivani! My name is Diane from the LinkedIn Premium team and I’d like to invite you to try Premium for free. We’ve recently seen an increase in job postings that might be a good fit."

    },
    { h1:"Shilpa Dhaware",
         p:"Hi Shivani,I reviewed your application for our Network/Digital Marketing and I am impressed with your background. I’d like to schedule a call with you to discuss your experience."

    },

    {
        h1:"Harmeek Singh",
        p:"Dear Shivani I hope this message finds you well. I wanted to reach out to you because I know how valuable a Master's in Data Science can be for professionals looking to advance their careers in the tech industry."

    }
]


function Messaging() {
  return (
    <div>
    <Navbar/>
    <div>
    </div>

    <div className='mainMsg'>
    <div className='networkLeft'>
      <h3>Manage My Messagin</h3>
      <i className="fa fa-users IconsInNetwork" ><span>Connections</span> <p>10</p></i>
      <i className="fa fa-phone IconsInNetwork" ><span>Contacts</span>  <p>105</p></i>
      <i className="fa fa-calendar IconsInNetwork" ><span>Events</span> </i>
      <i className="fa fa-file IconsInNetwork" ><span>Pages</span>  <p>34</p></i>
      <i className="fa fa-newspaper-o IconsInNetwork" ><span>Newsletter</span> </i>
      <i className="fa fa-hashtag IconsInNetwork" ><span>Hashtag</span>  <p>3</p></i>
      </div>

    <div className='middleMsg'>
    {
        infoMsg.map((data)=>(

            <div className='mapMsg'>
        <i className="fa fa-user-circle-o mes" > 
        <h3>{data.h1}</h3></i>
        <p>{data.p}</p>

            </div>
        ))
    }
    
    </div>




   <div className='RightSideBar'>
    <div className='upperRight'>
      <h5>Add to Your Feed</h5>
      <p>#Linkedln</p>
      <button>Follow</button>
      <p>#Website</p>
      <button>Follow</button><br></br>
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
    </div>
  )
}

export default Messaging