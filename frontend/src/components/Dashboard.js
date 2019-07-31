import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {Container,Divider,Image,List,Segment,Card,Icon,Grid} from 'semantic-ui-react'
import Navbar from './Navbar';
import CardsDashboard from './cards/CardsDashboard';
import Axios from 'axios'

 export default function Dashboard  (props) {

  const [user, setUser] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:4000/api/users')
      .then(({ data }) => {
        setUser(prevState => {
          return [...prevState, ...data.users]
        })
      })
      .catch(err => console.log(err))
  }, [])
  
  
 return( <>

   <Navbar {...props}/>


      {/* CONTENEDOR */}

   
      <Container textAlign='center'>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row columns={3} textAlign='center'>
          
             <CardsDashboard user={user}/>

        </Grid.Row>
      </Grid>
      
      </Container>

  
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

