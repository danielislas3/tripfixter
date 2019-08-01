import React,{useEffect, useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import Axios from 'axios';
const base_url='http://localhost:4000/api'



export default function DropRequest () {
  const userLogueado = JSON.parse(localStorage.getItem("loggedUser"))

   //aqui quiero que traiga los request que yo he hecho
 
   const [request, setRequest] = useState([])
  
   useEffect(() => {
  Axios.get(`${base_url}/request/userCreados/${userLogueado._id}`)
    .then(({ data }) => {
      setRequest(prevState => {
        return [...prevState,...data.request]
      })
    }).catch(err => console.log(err))

    
    
  },[])
  console.log(request)

  //aqui quiero que traiga los request que yo he hecho
  
  
  if(!request) return <p>Loading</p>
  const usuarisoFotografos = request.map((req)=>(
   
    {
      key: req.userPhoto.name,
      text: req.userPhoto.name,
      value: req.userPhoto.name,
      image: { avatar: true, src: req.userPhoto.photo },
    }
    
    //<p key={i}>{req.userPhoto.name}</p>
  ))
  
  return(

    <>
     

  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={usuarisoFotografos}
  />
  </>

   )

}

