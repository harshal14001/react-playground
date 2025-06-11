import { useRef } from 'react'

const FocusInput = () => {
    const inputRef=useRef(null)

    const Focus=()=>{
        inputRef.current.focus();
    }

  return (
    <div>
        <input type="text" ref={inputRef} placeholder='Click here'/>
        <button onClick={Focus}>Focus IN</button>
    </div>
  )
}

export default FocusInput;