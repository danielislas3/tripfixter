import React from 'react'
import {Link} from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/signup">Singnup</Link>
      <br/>
      <Link to="/album">album</Link>
      

    </div>
  )
}
