import { useContext } from "react";
import UserContext from "../context/userContext";

function Header() {

    const {user} = useContext(UserContext);
    const username = user!==null?user.userName:"enter username"; 
    return(
        <div>{username}</div>
    )
}
export default Header;