import {useState} from 'react'
import axios from 'axios'

const useForm = () => {
const [form,setForm]= useState({})

const handleInput=(e)=>{
  e.persist()
  setForm(prevState=>({
    ...prevState,
    [e.target.name]:e.target.value

  }))
}

 const uploadPhoto= async e=>{
    const file = new FormData()
    //aquui se manda como lo recibe las rutas del backend
    file.append('photo',e.target.files[0])
  //aqui subimos la imagen en cuanto selecciona el usuario la imagen y nos regresa en img el url de la imagen en la nuve
   const{data:{img}}= await axios.post('http://localhost:3000/upload',file)
  setForm(prevState=>({
    ...prevState,
    img
  }))   
 }


  return [form, handleInput,uploadPhoto]
}

export default useForm
