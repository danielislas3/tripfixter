import React, {useEffect} from 'react'
import AuthService from '../services/auth'
import useForm from '../hooks/useForm'

function Login(props) {
  const [form, handleInput] = useForm();
  const authService = new AuthService();
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser) return props.history.push("/profile");
  }, [props.history]);

  const handleLogin = () => {
    authService
      .login(form)
      .then(response => {
        localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
        props.history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" onChange={handleInput} />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleInput}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login
