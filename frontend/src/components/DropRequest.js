import React,{useEffect, useState} from 'react'
import { Dropdown,Form, Input} from 'semantic-ui-react'
import Axios from 'axios';
const base_url='http://localhost:4000/api'



export default function DropRequest (props) {
  const userLogueado = JSON.parse(localStorage.getItem("loggedUser"))
  const [request, setRequest] = useState([])
  const [ setImagenes] = useState([])
  const [usuarioDrop, setUsuarioDrop] = useState([])
  
  const selectPhotos = async e => {
    
		try {
      const photos = new FormData();
      for (let i=0; i<=e.target.files.length;i++){
        photos.append("photos", e.target.files[i]);
      }
      const cloudinaryPhoto = await Axios.post(`${base_url}/photosCloud`, photos)

      //aqu saco el url y lo meto a un arreglo
      const arrFotos=cloudinaryPhoto.data.photos.map((urlImg,i)=>{
        return(urlImg.secure_url)
      })
      

      const album=[]

      arrFotos.forEach((img,i )=> {
        const fotografias={
          img:img,
        }
        album.push(fotografias)
        console.log(fotografias)
      })
      
      Axios.post(`${base_url}/folders`,{"photos":arrFotos,"_creator":usuarioDrop[0]})
      .then(({ data }) => {
       // console.log(data)
        alert("FOTOS SUBIDAS CORRECTAMENTE")
        setImagenes(prevState => {
          return [...prevState, data._id]

        })
      })
      .catch(err => console.log(err))
     
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
      //aqui voy a traer las fotos a travez de los folders
      // Axios.get(`${base_url}/folders/${userLogueado._id}`).then(({...data})=>{
      //   console.log(data.data.folders)

      //   Axios.patch(`${base_url}/users/${userLogueado._id}`,{data})
      // })
    }
    
    ).catch(err => console.log(err))
  },[userLogueado._id])  
  
const crearFolder =(e,request)=>{
  
  setUsuarioDrop([request.value])

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

    

    </>:<p>SELECCIONA UN FOTOGRAFO</p>
  }
  </>

   )

}

