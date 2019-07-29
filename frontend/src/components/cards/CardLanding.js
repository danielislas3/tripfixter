import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import ImagenCarousel from './ImageCarousel'

const CardExampleCardProps = () => (
  <Card>
   <ImagenCarousel/>
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="/">
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
)

  

export default CardExampleCardProps