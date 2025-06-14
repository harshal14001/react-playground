import { useState } from "react"
import "../Form.css"
import { MdBorderColor } from "react-icons/md"

const Form = () => {
    
    const[username,setusername] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[confirmpassword,setconfirmpassword] = useState('')

    // to handle error

    const[errorusername,seterrorusername] = useState('')
    const[erroremail,seterroremail] = useState('')
    const[errorpassword,seterrorpassword] = useState('')
    const[errorconfirmpassword,seterrorconfirmpassword] = useState('')

    // error~color

    const[usernamecolor,setusernamecolor] = useState('')
    const[emailcolor,setemailcolor] = useState('')
    const[passwordcolor,setpasswordcolor] = useState('')
    const[confirmpasswordcolor,setconfirmpasswordcolor] = useState('')

    // validation | Test Cases

    const validate = e =>{
        e.preventDefault();
        
        // validation for user name

        if(username.length>8){
            seterrorusername('')
            setusernamecolor('green')
        }else{
            seterrorusername('Username should contain atleast 8 letters')
            setusernamecolor('red')
        }
       
        // validation for email

        if(email.includes('@gmail')){
            seterroremail('')
            setemailcolor('green')
        }else{
            seterroremail('enter valid mail address')
            setemailcolor('red')
        }

        // validatiobn for password 

        if(password.length>=8){
            seterrorpassword('')
            setpasswordcolor('green')
        }else{
            seterrorpassword('password must have length of 8')
            setpasswordcolor('red')
        }

        // validate password verification
        if(password!='' && password.length>=8 && password == confirmpassword){
            seterrorconfirmpassword('password correct')
            setconfirmpasswordcolor('green')
        }else{
            setconfirmpasswordcolor('red')
            seterrorconfirmpassword('Password incorrect')
        }

    }


  return (
    <>
        <div className="card">
            <div className="card-image"></div>

            <form>
                <input type="text" placeholder="Name" style={{borderColor: usernamecolor}} value={username}  onChange={(e)=>setusername(e.target.value)} /> 
                <p className="error">{errorusername}</p>
               
                <input type="email" placeholder="Email" style={{borderColor:emailcolor }} value={email} onChange={(e)=>setemail(e.target.value)}/>
                <p className="error">{erroremail}</p>

                <input type="password" placeholder="password" style={{borderColor:passwordcolor}} value={password} onChange={(e)=>setpassword(e.target.value)} />
                <p className="error">{errorpassword}</p>
                
                <input type="password" placeholder="confirm password" style={{borderColor:confirmpasswordcolor}} value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)} />
                <p className="error">{errorconfirmpassword}</p>

                <button className="submit-btn" onClick={validate}>Submit</button>

            </form>
        </div>
    </>
  )
}

export default Form