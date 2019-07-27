import React, { useEffect } from 'react'
import AuthService from '../services/auth';

export default function Profile(props) {
  const authService = new AuthService()
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (!loggedUser) return props.history.push("/login");
  }, [props.history]);
  
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        localStorage.removeItem('loggedUser')
        props.history.push('/login')
      })
      .catch(err => console.log(err))
  }


  return (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
