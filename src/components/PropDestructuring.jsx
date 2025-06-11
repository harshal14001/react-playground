const PropDestructuring = () => {
    return (
        <User name="harshal" age={23} />
    );
};
const User=({name,age})=>{
    return(
        <section>
            <h1>Name:{name}</h1>
            <h1>Age:{age}</h1>
        </section>
    );
};
export default PropDestructuring;