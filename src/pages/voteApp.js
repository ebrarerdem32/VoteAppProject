import React from 'react'
import {Link} from "react-router-dom"

function VoteApp() {
  return (
    <div className='home'>
        
        <Link to="/users" > <h2 className='head'>Welcome to Vote App</h2></Link>

    </div>
  )
}

export default VoteApp