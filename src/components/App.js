import React from 'react'
import '../styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';

const App = () => {

  return (
    <div id="main">
    { <BrowserRouter>
				<Routes>
					<Route path="/" element={<Login/>}/>
					<Route path="/home" element={<Home/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
				</Routes>
			</BrowserRouter>
    }
    
    
    </div>
  )
}


export default App;
