import React,{useEffect, useState} from 'react'
import { Dropdown,Form } from 'semantic-ui-react'
import Axios from 'axios';
const base_url='http://localhost:4000/api'



export default function DropRequest (props) {
  const userLogueado = JSON.parse(localStorage.getItem("loggedUser"))

   //aqui quiero que traiga los request que yo he hecho
 
   const [request, setRequest] = useState([])
   
   const [usuarioDrop, setUsuarioDrop] = useState([])
  
  useEffect(() => {
  Axios.get(`${base_url}/request/userCreados/${userLogueado._id}`)
    .then(({ data }) => {
      setRequest(prevState => {
        return [...prevState,...data.request]
      })
    }).catch(err => console.log(err))

    
    
  },[userLogueado._id])
  

  //aqui quiero que traiga los request que yo he hecho
  
  
const crearFolder =(e,request)=>{
  
  setUsuarioDrop([request.value])
  console.log(usuarioDrop)

 }


  const usuarisoFotografos = request.map((req)=>(
   
    {
      key: req.userPhoto.name,
      text: `${req.userPhoto.name} ${req.userPhoto.lastName}`,
      value: req.userPhoto._id,
      image: { avatar: true, src: req.userPhoto.photo },
    }
    
   
  ))
  
  return(
    <>


    {request[0]? <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={usuarisoFotografos}
    onChange={crearFolder}

  />: <p>No tienes request</p> 

}
  {  usuarioDrop?<>
  <Form>
      <Form.Input label='SUBIR FOTOS' type="file" name="photo" multiple />
 </Form>
    {console.log(usuarioDrop)}
    </>:<p>asdsaas</p>
  }
  </>

   )

}

