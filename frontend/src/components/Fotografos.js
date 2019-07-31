import React,{useEffect,useState} from 'react'
import {Container,Divider,Image,List,Segment,Grid,Header,Icon} from 'semantic-ui-react'
import Navbar from './Navbar';
import CardsDashboard from './cards/CardsDashboard';
import Axios from 'axios'

 export default function Fotografos  (props) {

  const [user, setUser] = useState([])

  useEffect(() => {
    Axios.get('https://tripfixer.herokuapp.com/api/users')
      .then(({ data }) => {
        setUser(prevState => {
          return [...prevState, ...data.users]
        })
      })
      .catch(err => console.log(err))
  }, [])
  
  
 return( <>

   <Navbar {...props}/>
   <br/>
  <br/>
  <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Fotografos</Header.Content>
    </Header>

      {/* CONTENEDOR */}

   
     
      <Grid  celled='internally' columns='equal' stackable>
        <Grid.Row centered columns={3} textAlign='center'>
          
             <CardsDashboard user={user}/>

        </Grid.Row>
      </Grid>
      


  
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

  </>)
 }

