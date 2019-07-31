import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import { Header, Image ,Loader,Dimmer,Grid,Segment} from 'semantic-ui-react'
import Axios from 'axios'
import RequestConfirm from './RequestConfirm';


export default function ProfileFotografo(props) {

  const [user, setUser] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:4000/api/users/${props.match.params.id}`)
      .then(({ data }) => {
        setUser(prevState=>{
          return [data.users]
        })
      })
      .catch(err => console.log(err))
  },[props.match.params.id] )
  
  
  if(user[0]){
    const fotografo= user[0]
    const requestData= [fotografo,props]
    return (
      <>
        <Navbar {...props} />
        <br/>
        <br/>

    <Segment>
       <Grid.Column>
        <Grid columns={2} relaxed='very'>
          <br/>
          <br/>
          <Header as='h2'>
            <Image circular src={fotografo.photo} /> {fotografo.name}
            <br/>
            
            <RequestConfirm {...requestData}/>

          </Header>

        </Grid>
        </Grid.Column>
           
  </Segment>
     <Segment>
      <Grid  celled='internally' columns='equal' stackable>
        <Grid.Row centered columns={3} textAlign='center'>
          {/* AQUI VAN LAS FOTOS REFERENCIADAS AL FOLDER */}

        {/* {fotografo.photosUser.map(foto=>{
          console.log(foto)
          return(
            <Grid.Column mobile={16} tablet={8} computer={5} style={{ paddingBottom: '8em', paddingTop: '7em' }}>
            <Image src={foto}/>
           </Grid.Column>
          )
        })} */}
        

         </Grid.Row>
      </Grid>
     </Segment>
     

      </>
    )
  }else return (
  <>
  <br/>
  <Dimmer active inverted>
        <Loader inverted size='massive'>Loading</Loader>
      </Dimmer>
  </>)

}
