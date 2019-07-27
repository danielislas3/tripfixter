import React, {useEffect} from 'react'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'

function Signup(props) {
  const [form, handleInput] = useForm()
  const authService = new AuthService()

  useEffect(()=>{
    
    const loggedUser = localStorage.getItem('loggedUser')
    if(loggedUser) return props.history.push('/profile')
  },[props.history])

  const handleSignup = () => {
    authService
      .signup(form)
      .then(response => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(response)
        props.history.push('/login')
      })
      .catch(err => {
        // aqui debería de ir una notificación o un SWAL o un TOASTR
        console.log(err.response)
        alert(err.response.data.msg || err.response.data.err.message)
      })
  }

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleInput} />

      <label htmlFor="lastName">Last name</label>
      <input type="text" name="lastName" id="lastName" onChange={handleInput} />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleInput} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={handleInput} />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  )
}

export default Signup
