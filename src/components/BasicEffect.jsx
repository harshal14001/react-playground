// from task 3:00:00


import React, { useEffect } from 'react'
import { useState } from 'react'

const BasicEffect = () => {
    const [mount, setmount] = useState([]);

    useEffect(() => {
        //console.log("Mounted........!")
        alert("Mounted")
    }, [mount])

    return (
        <div>
            
        </div>
    )
}

export default BasicEffect;


//on executin im getting alert twice because, once written in code and once because used <StrictMode>
// check notes for more