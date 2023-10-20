import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () =>{

    const[loginBtn, setLoginBtn] = useState("LogIn")

    return(
        <div className="nav-container">
            <div className="logo-container">
                <img className="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li className="login" onClick={() =>{
                        loginBtn === 'LogIn' ? setLoginBtn("LogOut") : setLoginBtn("LogIn")
                    }}>{loginBtn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;