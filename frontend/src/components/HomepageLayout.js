import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Button,Container,Divider,Grid,Header,Icon,Image,List,Menu,Responsive,Segment,Sidebar,Visibility } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import MadeWithLove from './MadeWithLove';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container fluid style={{  backgroundImage: "url('https://res.cloudinary.com/ironhack-daniel/image/upload/v1564602949/tripfixter/Screen_Shot_2019-07-26_at_3.09.50_PM_2_k0wxlf.jpg')",
  width: '100vw', height: '100vh',
  backgroundRepeat:'no-repeat',
  backgroundSize: 'cover',
  overflow: 'hidden',
  marginBottom:'0px'
    
  }} >
    <Header
      as='h1'
      content='Tripfix'
      inverted
      style={{
      

        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        
      }}
    />
    <Header
      as='h2'
      content= "Tus fotos como tus viajes ¡increíbles! ‪Regístrate y encuentra tu perfect photographer buddy"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  <Link to="/signup">
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Link>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                  <Link to="/">
                    <Menu.Item  header >
                      <Image src="https://res.cloudinary.com/ironhack-daniel/image/upload/v1564428373/tripfixter/logo_nmu1e4.png" size="small"/>
                    </Menu.Item >
                    
                  </Link>
                 
                <Menu.Item position='right'>
                <Link to="/login">

                  <Button  inverted={!fixed}>
                    Log in
                  </Button>
                </Link>
            
                <Link to="/signup">
                  <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                  </Link>

                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          
          <Menu.Item as='a' href="/login" >
              Log in
          </Menu.Item>

          <Menu.Item as='a' href="/signup">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Link to="/login">
                    <Button  inverted>
                      Log in
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button 
                    inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Link>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (

  <div>
    <DesktopContainer>{children}</DesktopContainer>

    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            Presume maravillosas fotos
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            ‪Olvídate del selfiestick. ‬
‪             Únete a la comunidad y encuentra a tu compañero de fotografías y viaje. ‬
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
             Encuentra más amigos
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            ‪La foto perfecta sí existe. Quien te la tome, también. ‬
‪             Únete y encuentra tu foto perfecta y tu partner perfecto. ‬
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Image src="https://images.clarin.com/2018/03/14/SJYQg2YYz_1256x620__1.jpg"></Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            ‪Regístrate y encuentra personas viajando como tú que quieren fotos como tú.
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Grandes viajes merecen fotos increibles"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='' />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
     
                <MadeWithLove/>
          
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout