import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{

    console.log('Hearder Rendered');

    const[loginBtn, setLoginBtn] = useState("Sign In")

    // useEffect(()=>{
    //     console.log('UseEffect Called');
    // }, [loginBtn])

    const onlineStatus = useOnlineStatus();

    return(
        <div className="className='w-full h-20 top-0 flex justify-between items-center sticky shadow-lg bg-white z-[1001]">
            <div className="ml-4 sm:ml-10 md:ml-20 flex items-center">
                <img className="w-[150] cursor-pointer" src={LOGO_URL} />
            </div>
            <div className="">
                <ul className="flex flex-wrap justify-between">
                    {/* <li className="sm:mr-7 md:flex group hover:text-orange-500 mr-14"><Link className="flex items-center justify-center gap-2 font-medium text-base" to="/">Status: {onlineStatus ? "online" : "offline"}</Link></li> */}
                    <li className="sm:mr-7 md:flex text-orange-600 group hover:text-orange-500 mr-14"><Link className="flex items-center justify-center gap-2 font-medium text-base" to="/">Home</Link></li>
                    <li className="sm:mr-7 text-orange-600 md:flex group hover:text-orange-500 mr-14"><Link className="flex items-center justify-center gap-2 font-medium text-base" to="/about">About</Link></li>
                    <li className="sm:mr-7 text-orange-600 md:flex group hover:text-orange-500 mr-14"><Link className="flex items-center justify-center gap-2 font-medium text-base" to="/contact">Contact Us</Link></li>
                    <li className="sm:mr-7 text-orange-600 md:flex group hover:text-orange-500 mr-14"><Link className="flex items-center justify-center gap-2 font-medium text-base" to="/cart">Cart</Link></li>
                    <li className="sm:mr-7 text-orange-600 md:flex group hover:text-orange-500 mr-14" onClick={() =>{
                        loginBtn === 'Sign In' ? setLoginBtn("Sign Out") : setLoginBtn("Sign In")
                    }}> {loginBtn}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;