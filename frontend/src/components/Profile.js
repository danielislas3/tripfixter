import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Container,Header,Button , Modal,Form} from 'semantic-ui-react'
import { Card, Icon,Image } from 'semantic-ui-react'
import Navbar from './Navbar';
import useForm from "../hooks/useForm";
import AuthService from '../services/auth'
//import userService from '../services/user'
import Axios from 'axios';
import DropRequest from './DropRequest';
const base_url='http://localhost:4000/api'


//obtener mis folders como fotografo


const Profile = (props) => {
  const rawUser = localStorage.getItem("loggedUser");
  const usuarioPar = JSON.parse(rawUser)
  const [loggedUser] = useState(usuarioPar) 
  const [form, handleInput] = useForm();
  

  const authService = new AuthService();

  Axios.get(`${base_url}/folders/${loggedUser}`)
  .then(({data}) => {
    
  }).catch(console.log)

  const selectPhoto = async e => {
    
		try {
			const photo = new FormData();
			photo.append("photo", e.target.files[0]);
      
      const cloudinaryPhoto = await Axios.post(`${base_url}/upload`, photo)
     
      Axios.patch(`${base_url}/users/${loggedUser._id}`,{photo:cloudinaryPhoto.data.photo})
      .then(res=>{

      })
      .catch(console.log)
      console.log(cloudinaryPhoto.data.photo)


		} catch (error) {
			console.log(error);
		}
  }

  const handleEdit = () => {
    console.log("form: "+{form});
		authService
			.updateUser(form,loggedUser._id)
			.then(response => {
                console.log("respuesta del then"+{response});
                localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
        props.history.push("/profile");
        
			})
			.catch(err => {
				console.log(err);
      });
      alert("Usuario Actualizado ")

  };

  

  return (
    <>
      <Navbar {...props} />

      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>
      <Image circular src={loggedUser.photo} /> My perfil 
      </Header>
      
      <Link  to="/subirFotos">
      </Link>
      <Button>Mis fotos</Button>



        {/* <Image avatar={true} src={loggedUser.photo} size='small' circular /> */}

      <Card
      image={loggedUser.photo}
      header={loggedUser.name+" "+loggedUser.lastName}
      meta={loggedUser.location.city}
      description={loggedUser.description}
      extra={<>


    <Modal  trigger={<Button icon >  <Icon name='edit' /> Editar perfil</Button> }>
      <Modal.Header>Editar perfil</Modal.Header>
     <Modal.Content image>
      <Image wrapped size='medium' src={loggedUser.photo} />
      <Modal.Description>
        
     
       <Form size='large' as='form'>


        <Form.Input type="file" label='Editar foto000' name='photo' onChange={selectPhoto} />
    
          <Form.Input label="Name"type="text" name="name" placeholder='Name' onChange={handleInput} defaultValue={loggedUser.name}  />

          <Form.Input label="Last Name" type="text"  name="lastName" placeholder='Last Name' onChange={handleInput} defaultValue={loggedUser.lastName}  />

          <Form.Input label="City" type="text"  placeholder='City' name="city" onChange={handleInput} defaultValue={loggedUser.location.city}  />

          <Form.TextArea label='Description'name="description" defaultValue={loggedUser.description}  onChange={handleInput} placeholder='Tell us more about you...'  />
        

          <Form.Button onClick={handleEdit} >Update</Form.Button >

       
       </Form>
      
       </Modal.Description>

     
    </Modal.Content>
  </Modal>
        <DropRequest/>

    </>}

      
  />

     
    </Container>
    </>
  )
}

export default Profile
