import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <>
    <Icon name='user' />
    16 Friends
  </>
)

const CardsDashboard = (props) => (
  <Card
    image='/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    extra={extra}
  />
)

export default CardsDashboard