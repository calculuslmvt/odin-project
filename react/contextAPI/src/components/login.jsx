import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleClick = (event)=> {
        event.preventDefault();
        setUser({userName, password}); 
        
    }

    return (
        <div>
            <div>
                <input type="text" 
                placeholder="username"
                value={userName}
                onChange={(event)=>setUserName(event.target.value)}/>
            </div>
            <div>
                <input type="password" 
                placeholder="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <button 
                onClick={handleClick}>
                Submit</button>
        </div>
    );
}
export default Login;