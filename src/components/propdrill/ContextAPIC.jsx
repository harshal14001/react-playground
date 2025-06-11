import React from 'react'
import { Dataaa } from '../../App'

const ContextAPIC = () => {
  return (
    <Dataaa.Consumer>
        {(name)=>{
          return <h1>{name}</h1>
        }}
    </Dataaa.Consumer>
  )
}

export default ContextAPIC