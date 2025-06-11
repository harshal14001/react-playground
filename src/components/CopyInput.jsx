import { useState } from "react";

const CopyInput = () => {

    const[InputValue,setInputValue]=useState('');
    const[copied,setcopied]=useState(false);

    const handlecopy=()=>{
        navigator.clipboard.write(InputValue).then(()=>{
            setcopied(true);
            setTimeout(()=>setcopied(false),2000);
        });
    };

  return (
    <div>
        <input type='text' value={InputValue} onChange={e=>setInputValue(e.target.value)} />
        <button onClick={handlecopy}>copy</button>
        <PopupContent copied={copied}/>
    </div>
  )
}

export default CopyInput;