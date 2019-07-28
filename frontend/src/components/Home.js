import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


export default function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Singnup</Link>
      
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    </div>
  )
}
