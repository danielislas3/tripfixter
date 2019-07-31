import React from 'react'
import {Container,Divider,Header,Image,List,Segment} from 'semantic-ui-react'
import Navbar from './Navbar';

const Lugares = (props) => {
  return (
    <div>

   <Navbar {...props}/>


      {/* CONTENEDOR */}
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Lugares</Header>
      <p>asdfasdfasdlknf.sdnflasdnfñlkns-dl-knasdf</p>
      <p>
       asdasdfasdfds
      </p>

     
    </Container>
    
  {/* FOOTER */}

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>

        <Divider inverted section />
        <Image centered size='medium' src='/logo.png' />
        <List horizontal inverted divided link size='small'>
          <List.Item as='a' href='#'>
            Site Map
          </List.Item>
          <List.Item as='a' href='#'>
            Contact Us
          </List.Item>
          <List.Item as='a' href='#'>
            Terms and Conditions
          </List.Item>
          <List.Item as='a' href='#'>
            Privacy Policy
          </List.Item>
        </List>
      </Container>
    </Segment>

  </div>
  )
}

export default Lugares
