import React from 'react'
import {Container,Header} from 'semantic-ui-react'

import Navbar from './Navbar';

const Profile = () => {
  return (
    <>
      <Navbar/>
      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Esto es el perfil</Header>
      <p>werwerwerwer</p>
      <p>
       werwerefwer
      </p>

     
    </Container>
    </>
  )
}

export default Profile
