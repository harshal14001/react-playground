
const UserStatus = (props) => {
    if(props.loggedIn && props.isAdmin){
        return <h2>welcome admin!</h2>
    }
    else{
        return <h2>welcome User!</h2>
    }
}

export default UserStatus