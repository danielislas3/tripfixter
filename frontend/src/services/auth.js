import axios from 'axios'
//el link del servidor
const baseURL = 'http://localhost:4000/api'

class AuthService{

    constructor(){
      this.service= axios.create({
        baseURL,
        withCredentials:true
      })
    }
    signup(data){
      return this.service.post('/signup',data)
    }
    login(data){
      return this.service.post('/login', data)
    }
    logout(){
      return this.service.get('/logout')
    }
}

export default AuthService