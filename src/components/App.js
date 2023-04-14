import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';
import MyNetwork from './MyNetwork';
import Jobs from './Jobs';
import Notification from './Notification';
import Messaging from './Messaging';


const App = () => {

  return (
    <div id="main">
      {<BrowserRouter>
        <Routes>
          {<Route path="/" element={<Login />} />}
          <Route path="/home" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notification" element={<Notification />} />

        </Routes>
      </BrowserRouter>
      }
    </div>
  )
}


export default App;
