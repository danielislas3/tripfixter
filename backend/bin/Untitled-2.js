import React, {  useEffect, useState } from 'react'

import { Button, Confirm } from 'semantic-ui-react'

function RequestConfirm (props) {

   [open,setOpen]= useState([])


  const data={...props[0]}
  //requestData={...this.props}
  function close (ev){
    setOpen(ev)
  }

  //id usuario
  console.log((JSON.parse(localStorage.loggedUser))._id)
  // id del fotogrago
  console.log(data._id)

  useEffect(() => {
    close()
  }, [])

    return (
      <div>
        <Button positive onClick={close(true)}>REQUEST</Button>
        <Confirm open={this.state.open} onCancel={this.close} onConfirm={this.close} />
      </div>
    )
  
}

export default RequestConfirm