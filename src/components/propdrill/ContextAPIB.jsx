import React from 'react'
import { Dataaa } from '../../App'

const ContextAPIB = ({name}) => {
  return (
    <Dataaa.Consumer>
      {(name)=>{
        return <h1>B:{name}</h1>;
      }}
    </Dataaa.Consumer>
  )
    
  

}

export default ContextAPIB