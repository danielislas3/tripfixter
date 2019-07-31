import React from 'react'
import {Link}  from 'react-router-dom'
import { Card, Icon,Grid,Button } from 'semantic-ui-react'



 function extra (user) {
   return (
  <>
    <Icon name='photo' />
    {user.photosUser.length} Fotos <br/>
    <Button.Group>
      <Link to={`/fotografos/${user._id}`}>
      <Button>Profile</Button>
      </Link>
      <Button.Or />
    <Button positive>Request</Button>
  </Button.Group>
  </>)
}


export default function CardsDashboard ({user}) {
  return(
   <>
    
    {  user.map((user,i)=>{
    return (  <Grid.Column mobile={16} tablet={8} computer={5}key={i} style={{ paddingBottom: '8em', paddingTop: '7em' }}>
      <Card 
    
      image={user.photo} 
      header={user.name+" "+user.lastName}
      meta={user.city}
      description={user.description}
      extra={extra(user)}

    />
   
      
    </Grid.Column>)
  })}

  </>
  )


  
}

 