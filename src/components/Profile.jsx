import React from 'react'
import { useState } from 'react'

const Profile = () => {
  const[Profile,setprofile] = useState({
    Name:"",
    Age:"",
  }); 

  const handleChange = e=>{
    const{Name,value}=e.target

    setprofile((previousProfile)=>({
      ...previousProfile,
      [Name]: value
    }));
  }

  return (
    <div>
        <h1>User Profile</h1>
        
        <div>
          <label>Name:
            <input 
              type="text" 
              Name="Name" 
              value={Profile.Name} 
              onChange={handleChange} 
            />
          </label>
        </div>

        <div>
          <label >Age:
            <input 
              type="number" 
              Age="Age" 
              value={Profile.Age} 
              onChange={handleChange} 
            />
          </label>
        </div>

        <h3>Profile Info</h3>
        <p>Name:{Profile.Name}</p>
        <p>Age:{Profile.Age}</p>

    </div>
  )
}

export default Profile