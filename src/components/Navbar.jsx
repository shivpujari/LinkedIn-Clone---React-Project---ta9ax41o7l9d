import React from 'react'
import '../styles/home.css';
import smallLogo from '../Images/smallLogo.png'
import Login from './Login'
import MyNetwork from './MyNetwork'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'


function Navbar() {
  const navigate = useNavigate();
  let names = localStorage.getItem('name');


    const handleLogout=()=>{
        localStorage.removeItem("name",names);
        navigate("/");
      }
    
  return (
    <div>
    <nav className='navStart'>
        <img className='smallLogo' src={smallLogo} />
        <input className='input1' type="search" placeholder='Search ' />
        <i className="fa fa-home faIconsIcon"><p className='homeIcon'>Home</p></i>
        <i className="fa fa-users faIcons"><p className='networkIcon'><Link to="/mynetwork">My Network</Link></p></i>
        <i className="fa fa-briefcase faIcons" ><p className='jobsIcon'><Link to="/jobs">Jobs</Link></p></i>
        <i className="fa fa-commenting-o faIcons" ><p className='msgIcon'><Link to="/messaging">Messaging</Link></p></i>
        <i className="fa fa-bell-o faIcons" ><p className='notificationsIcon'><Link to="/notification">Notifications</Link></p></i>
        <i className="fa fa-user-circle-o faIcons" ><p className='meIcon'>Me</p></i>
        <button onClick={handleLogout}>Logout</button>

      </nav>
    </div>
  )
}

export default Navbar