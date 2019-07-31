import React, { Component } from 'react'

import { Button, Confirm } from 'semantic-ui-react'

class RequestConfirm extends Component {
  state = { open: false 
    
  }
  data={...this.props[0]}
  //requestData={...this.props}
  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    //id usuario
    console.log((JSON.parse(localStorage.loggedUser))._id)
    // id del fotogrago
    console.log(this.data._id)
    return (
      <div>
        <Button positive onClick={this.open}>REQUEST</Button>
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} />
      </div>
    )
  }
}

export default RequestConfirm