import axios from 'axios';
import { useState,useEffect } from 'react';
import '../Meals.css'


const Meals = () => {
  const [item,setitem]=useState([])

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    .then(res=>{
      // console.log(res.data.meals)
      setitem(res.data.meals);   // sending data to state
    })
    .catch(err=>console.log("Error:",err));
  },[])
  
  const itemlist = item.map(({idMeal,strMealThumb,strMeal})=>{
    
    return(
      <section className="card">
        <img src= {strMealThumb} alt={strMeal}/>
        <section className="content">
          <p>{strMeal} ${idMeal}</p>
        </section>
      </section>
    )

  })

  return (
    <div className="item-container">{itemlist}</div>
  )
}

export default Meals;