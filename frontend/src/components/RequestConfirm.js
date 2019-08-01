import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Confirm,Form } from 'semantic-ui-react'


class RequestConfirm extends Component {



  handleInput = e=>{
    e.persist()
    this.setState((prevState)=>(
      {...prevState,[e.target.name]:e.target.value}
    ))
  }

  data={...this.props[0]}

  state = { open: false,
    user:JSON.parse((localStorage.loggedUser))._id,
    userPhoto:this.props[0]._id
  }
  //requestData={...this.props}
  open = () => this.setState({ open: true })
  close = () => (this.setState({ open: false }))

  enviarDatos=()=>{
    console.log(this.state)
    Axios.post(`https://tripfixer.herokuapp.com/api/request`,this.state)
    .then(({ data }) => {
      this.setState(prevState => {
        return [data,prevState]
      })
    })
    .catch(err => console.log(err))

   alert("Solicitud enviada")
    this.close()
  }
  render() {
    //id usuario
    
    //console.log((JSON.parse(localStorage.loggedUser))._id)
    // id del fotogrago
    //console.log(this.data._id)
    console.log(this.state)
    return (
      <>

        <Button positive  onClick={this.open}>REQUEST</Button>
        
       
        <Confirm content={
          <Form>
          <Form.Field>
            <label>Luagr donde sera la sesión</label>
            <input placeholder='Lugar' name=""  />
          </Form.Field>
          <Form.Field>
            <label>Mensaje</label>
            <input name = "msg" placeholder='Cuentale mas al fotografo para ponserse de acuerdo' onChange={this.handleInput}/>
          </Form.Field>
          <Form.Field>
            <label>Fecha de sesión</label>
            <input type="date" name = "date" onChange={this.handleInput} />
          </Form.Field>
        </Form>
        } open={this.state.open} onCancel={this.close} onConfirm={this.enviarDatos} />
      </>
    )
  }
}

export default RequestConfirm