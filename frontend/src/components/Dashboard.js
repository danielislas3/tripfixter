import React from 'react'
import {Container,Divider,Header,Image,List,Segment} from 'semantic-ui-react'
import Navbar from './Navbar';
import CardsDashboard from './cards/CardsDashboard';
import { Grid } from '@material-ui/core';

const Dashboard = (props) => (
  < >

   <Navbar {...props}/>


      {/* CONTENEDOR */}

    <Segment  vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
    
      <List horizontal  relaxed  size='small'>
          <List.Item >
            <CardsDashboard/>
          </List.Item>
          </List>
      </Container>
    </Segment>


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

  </>
)

export default Dashboard