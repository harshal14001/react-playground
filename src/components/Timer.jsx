import { useRef,useEffect,useState } from "react"

const Timer = () => {

    const[count,setcount]= useState(0)
    const intervalRef = useRef(null)

    useEffect(()=>{
        intervalRef.current= setInterval(()=>{
            setcount((prevCount)=>prevCount)
        },5000);

        return()=>{
            clearInterval(intervalRef.current);
        }
    },[]);

  return (
    <div>
        <h1>Timer: {count}sec</h1>
        <button onClick={()=>clearInterval(intervalRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer