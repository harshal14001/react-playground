const PropsEg = ()=>{    // parent component
    return(  
        <User name="harshal" age={23}/>
    );
    
};
const User = (props)=>{   // child component
    return(  
        <section>
            <h1>Name:{props.name}</h1>
            <h1>age:{props.age}</h1>
        </section>
    );
};

export default PropsEg; 
