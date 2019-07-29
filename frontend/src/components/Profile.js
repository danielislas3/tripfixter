import React, { useEffect } from 'react'
import AuthService from '../services/auth';
//import CardLanding from '../components/cards/CardLanding'


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
        //te desloguea y te redirige a:
        alert("Fin de sesion")
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }


  return (
    <>

      <button onClick={handleLogout}>Logout</button>
 

    </>
  )

}
