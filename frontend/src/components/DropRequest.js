import React,{useEffect, useState} from 'react'
import { Dropdown,Form, Input} from 'semantic-ui-react'
import Axios from 'axios';
const base_url='http://localhost:4000/api'



export default function DropRequest (props) {
  const userLogueado = JSON.parse(localStorage.getItem("loggedUser"))

  const rawUser = localStorage.getItem("loggedUser");
  const usuarioPar = JSON.parse(rawUser)
  const [loggedUser] = useState(usuarioPar) 
  const [request, setRequest] = useState([])
  const [usuarioDrop, setUsuarioDrop] = useState([])
  
  const selectPhotos = async e => {
    
		try {
      const photos = new FormData();
      for (let i=0; i<=e.target.files.length;i++){
        photos.append("photos", e.target.files[i]);
      }
      const cloudinaryPhoto = await Axios.post(`${base_url}/photos`, photos)
 
     
      // Axios.patch(`${base_url}/users/${loggedUser._id}`,{photo:cloudinaryPhoto.data.photo})
      // .then(res=>{

      // })
      // .catch(console.log)
      const arrFotos=cloudinaryPhoto.data.photos.map((urlImg,i)=>{
        return(urlImg.secure_url)
      })
      console.log(arrFotos)
      //console.log(cloudinaryPhoto.data.photos[0].secure_url)


		} catch (error) {
			console.log(error);
		}
  }
  
  useEffect(() => {
    //aqui quiero que traiga los request que yo he hecho
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
  {  usuarioDrop.length>0?<>
  <Form>
      <Input label='SUBIR FOTOS' type="file" name="photos" multiple onChange={selectPhotos} />
 </Form>

    {console.log(usuarioDrop)}
    

    </>:<p>SELECCIONA UN FOTOGRAFO</p>
  }
  </>

   )

}

