import React,{useEffect, useState} from 'react'
import { Dropdown,Form, Input} from 'semantic-ui-react'
import Axios from 'axios';
const base_url='http://localhost:4000/api'



export default function DropRequest (props) {
  const userLogueado = JSON.parse(localStorage.getItem("loggedUser"))
  const [request, setRequest] = useState([])
  const [imagenes, setImagenes] = useState([])
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
     //voy a crear los modelos de fotos
     arrFotos.forEach((img,i )=> {
      const fotografias={
        img:img,
        _creator:usuarioDrop[0]
      }
      Axios.post(`${base_url}/photos`,fotografias)
      .then(({ data }) => {
        console.log(data)
        setImagenes(prevState => {
          return [...prevState, data._id]
        })
      })
      .catch(err => console.log(err))

     });
    //  const fotografias={
    //    img:arrFotos,
    //    _creator:usuarioDrop[0]
    //  }
      
      // .then(res=>{

      // })
      // .catch(console.log)

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

