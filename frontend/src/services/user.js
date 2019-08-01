import axios from 'axios'
const baseURL = 'https://tripfixer.herokuapp.com/api'
 
class userService{
  constructor() {

    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  getAllUsers() {
    return this.service.get('/users')
  }

  getOneUser(id) {
    return this.service.get(`/users/${id}`)
  }

  updateUser(data) {
    return this.service.patch(`/users/${data._id}`, data)
  }
  //para eliminar cuenta
  deleteUser(id) {
    return this.service.delete(`/users/${id}`)
  }
// Terminado flujo de usuario

}
export default userService
