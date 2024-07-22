import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    
    const {user} = useContext(UserContext); 

    if(user && user.userName)
        return (<div> Welcome user : {user.userName} </div>);
        
    return (<div>Enter username </div>);
}
export default Profile;