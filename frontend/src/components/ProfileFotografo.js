import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import { Header ,Loader,Dimmer,Grid,Segment,Card,Divider,Button} from 'semantic-ui-react'
import CardFotosTomadas from './cards/CardsFotosTomadas'
import Axios from 'axios'
import RequestConfirm from './RequestConfirm';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZGFuaWVsaXNsYXMzIiwiYSI6ImNqeG0yY2RhYTAwbXgzb25kaHRkNG1uY28ifQ.Q9LewDAeIYbUj-b7AXfdBw"
});





export default function ProfileFotografo(props) {

  const [user, setUser] = useState([])

  useEffect(() => {
    Axios.get(`https://tripfixer.herokuapp.com/api/users/${props.match.params.id}`)
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

        <Segment >
          <Grid columns={2} stackable textAlign='center'>
          <Divider vertical></Divider>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
          <Header >
           
           <div>

          
    
           <Map style={`mapbox://styles/mapbox/streets-v9`} containerStyle={{
                    height: "40vh",
                    width: "40vw"
                  }}>
                    <Layer
                      type="symbol"
                      id="marker"
                      layout={{ "icon-image": "marker-15" }}>
                      <Feature coordinates={[ -99.1566862,19.4204502]}/>
                    </Layer>
                </Map>

           </div>
           
          </Header>
        </Grid.Column>

        <Grid.Column>
        <br/>
          <br/>
          <Header as='h3'>
          <Card
                image={fotografo.photo}
                header={fotografo.name}
                meta={fotografo.lastName}
                description={fotografo.description}
            />
            
            <br/>
            <br/>

          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
     <Segment>
      <Grid  celled='internally' columns='equal' stackable>
            <RequestConfirm {...requestData}/>
        
          {/* AQUI VAN LAS FOTOS REFERENCIADAS AL FOLDER */}
          
          <Card.Group itemsPerRow={4}>
   

    <CardFotosTomadas {...props}/>


  </Card.Group>

        

        
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
