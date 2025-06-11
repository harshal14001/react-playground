const Greeting = () =>{
    const Name="HARSHAL";
    const date = new Date();
    return(
        <div>
            <h1>Hello {Name}</h1>
            <p>Date is :{date.getDate()}</p>
        </div>
    );
}
export default Greeting ;