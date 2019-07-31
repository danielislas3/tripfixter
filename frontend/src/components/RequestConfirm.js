import React, { Component } from 'react'
import Axios from 'axios'
import { Button, Confirm,Form } from 'semantic-ui-react'

// function filter(category) {
//   Axios.post(`http://localhost:4000/api/request`)
//     .then(({ data }) => {
//       setposts(prevState => {
//         return [...data.posts]
//       })
//     })
//     .catch(err => console.log(err))
// }


class RequestConfirm extends Component {

  // createReq(){
  //   Axios.post('http://localhost:4000/api/request',)
  //   .then(({data}=>{
  //     this.setState(prevState =>() ...prevState,
  //       ...data.)
  //   })
  //   )
  // }

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
  close = () => this.setState({ open: false })

  render() {
    //id usuario
    
    //console.log((JSON.parse(localStorage.loggedUser))._id)
    // id del fotogrago
    //console.log(this.data._id)
    console.log(this.state)
    return (
      <>

        <Button positive  onClick={this.open}>REQUEST</Button>
        
        <p>{JSON.stringify(this.state)}</p>
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
        } open={this.state.open} onCancel={this.close} onConfirm={this.close} />
      </>
    )
  }
}

export default RequestConfirm