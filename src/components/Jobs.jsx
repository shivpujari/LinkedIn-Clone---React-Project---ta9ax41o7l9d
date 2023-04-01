import React from 'react'
import Navbar from './Navbar'
import '../styles/jobs.css'
import imgTwoLadies from '../Images/twoLadies.png'




const jobsInfo = [
    {
        h3: "React Js Deveoper",
        company: "FindErnest",
        locate : "Hyderabad, Telangana",
        date: "2 weeks age"

    },
    {
        h3: "Front end Deveoper",
        company: "Tata Consultancy Services",
        locate : "Pune, Maharashtra",
        date: "Actively recruiting"

    },
      {
        h3: "Java Developer",
        company: "Tesla",
        locate : "Hyderabad, Telangana",
        date: "2 weeks age"

    }
    ,
      {
        h3: "Python Deveoper",
        company: "IBM",
        locate : "Chennai, TamilNadu",
        date: "2 weeks age"

    }
]

function Jobs() {
  return (
    <div>
    <Navbar/>
    <div>
    </div>

    <div className='jobsMain'>
    <div className='jobsLeft' >
    <i className="fa fa-users IconsInNetwork" ><span>My Jobs</span> </i>
    <i className="fa fa-file IconsInNetwork" ><span>Resume Builder</span></i>
      <i className="fa fa-phone IconsInNetwork" ><span>Contacts</span>  <p>105</p></i>
      <i className="fa fa-calendar IconsInNetwork" ><span>Events</span> </i>
      <i className="fa fa-hashtag IconsInNetwork" ><span>Hashtag</span>  <p>3</p></i>
      <i className="fa fa-newspaper-o IconsInNetwork" ><span>Newsletter</span> </i>
    </div>

    <div className='jobsMiddle'>
    <h3 className='h3re'>Recommended For You</h3>
    <p className='basedon'>Based on your Profile and your search</p>
     {
        jobsInfo.map((data)=>(
            <div className='jobInfoinDiv'>
            <h3>{data.h3}</h3>
            <p className='companyJobs'>{data.company}</p>
            <p className='companyLocate'>{data.locate}</p>
            <p className='companydata'>{data.date}</p>
            <button>Apply To this Job</button>
            <hr></hr>
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

export default Jobs