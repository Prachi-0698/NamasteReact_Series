import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () =>{

    console.log('Hearder Rendered');

    const[loginBtn, setLoginBtn] = useState("LogIn")

    // useEffect(()=>{
    //     console.log('UseEffect Called');
    // }, [loginBtn])

    return(
        <div className="nav-container">
            <div className="logo-container">
                <img className="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li><Link className="nav-link" to="/cart">Cart</Link></li>
                    <li className="login" onClick={() =>{
                        loginBtn === 'LogIn' ? setLoginBtn("LogOut") : setLoginBtn("LogIn")
                    }}> {loginBtn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;