import React from 'react'
import '../styles/home.css';
import smallLogo from '../Images/smallLogo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'


function Navbar() {
  const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("name");
        navigate("/");
      }
    
  return (
    <div>
    <nav className='navStart'>
        <img className='smallLogo' src={smallLogo} />
        <input className='input1' type="search" placeholder='Search ' />
        <i className="fa fa-home faIconsIcon"><p className='homeIcon'><Link to="/home">Home</Link></p></i>
        <i className="fa fa-users faIcons"><p className='networkIcon'><Link to="/mynetwork">My Network</Link></p></i>
        <i className="fa fa-briefcase faIcons" ><p className='jobsIcon'><Link to="/jobs">Jobs</Link></p></i>
        <i className="fa fa-commenting-o faIcons" ><p className='msgIcon'><Link to="/messaging">Messaging</Link></p></i>
        <i className="fa fa-bell-o faIcons" ><p className='notificationsIcon'><Link to="/notification">Notifications</Link></p></i>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  )
}

export default Navbar