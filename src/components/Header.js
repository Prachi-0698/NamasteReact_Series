import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return(
        <div className="nav-container">
            <div className="logo-container">
                <img className="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-links">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;