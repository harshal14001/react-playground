


const Weather = () => {
    let temperature = 50
  
    if(temperature < 15){
       return <h2>It's Cold outside</h2>
    }

    else if(temperature < 15  && temperature > 25){
       return <h2>It's Nice outside</h2>
    }

    else if(temperature > 25){
        return <h2>It's Hot outside</h2>
    }

    else{
        return <h2>All Gooddd!</h2>
    }
}
export default Weather;