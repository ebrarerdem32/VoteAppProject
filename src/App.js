import React from 'react'
import Users from './pages/users';
import UserDetail from './pages/userDetail';
import VoteApp from './pages/voteApp'
import { Link, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
    <nav >
      <Link to="/users" element={<Users />}> <div className='menu-item'> Home</div> </Link>
    </nav>
     <Routes>
      <Route path="/" element={<VoteApp />} />
      <Route path="/users" element={<Users />} />
      <Route path="users/:id" element={<UserDetail />} />
     </Routes>
     </>
  
  )
}

export default App
