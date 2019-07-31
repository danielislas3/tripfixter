import React from 'react'
import { Card, Icon,Grid } from 'semantic-ui-react'



const extra = (
  <>
    <Icon name='user' />
    16 Friends
  </>
)


export default function CardsDashboard ({user}) {
  //console.log(user)
  return(
   <>
    
    {  user.map((user,i)=>{
    return (  <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Card key={i}
    
      image={user.photo} 
      header={user.name+" "+user.lastName}
      meta={user.city}
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={extra}
    /></Grid.Column>)
  })}

  </>
  )


  
}

 