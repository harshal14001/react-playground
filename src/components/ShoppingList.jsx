import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {

    const[item,setitem]=useState([]);
    const[name,setname]=useState('')
    const[quantity,setquantity]=useState('')

    const handleSubmit=e=>{
        e.preventDefault()

        if(!name || !quantity) return;

        const newItem={
            name,
            quantity:parseInt(quantity),
        };
        setitem((prevItems)=>[...prevItems,newItem])
        setname("");
        setquantity("")
    }

    return (
        <div>
              <h1>Shopping List</h1>
              <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Item Name'
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                />

                <input type='number'
                    placeholder='quantity'
                    value={quantity}
                    onChange={(e)=>setquantity(e.target.value)}
                />
                <button type='submit'>Add item</button>

              </form>
              <li>
                {item.map((item,index)=>(
                    <ul key={index}>
                        {item.name}- Quantity: {item.quantity}
                    </ul>
                ))}
              </li>
        </div>
    )
}

export default ShoppingList