
// const Greeting1 = (props) => {

//     <div>
//         if(timeofday=="morning")
//             return <h2>Good Morning!</h2>
        
//         else if(timeofday=="afternoon")
//             return <h2>Good Afternoon!</h2>
        
//         else if(timeofday=="eveninig")
//             return <h2>Good evening!</h2>
        
//         else()
//             return <h2>Good night!</h2>
        
//     </div>
// }

// export default Greeting1

const Greeting1 = (props) => {
    const { timeofday } = props;

    if (timeofday == "morning") {
        return <h2>Good Morning!</h2>;
    } else if (timeofday == "afternoon") {
        return <h2>Good Afternoon!</h2>;
    } else if (timeofday == "evening") {
        return <h2>Good Evening!</h2>;
    } else {
        return <h2>Good Night!</h2>;
    }
};

export default Greeting1;
