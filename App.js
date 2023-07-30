import React from "react";
import ReactDOM  from "react-dom/client";

const Header = () =>{
    return(
        <div className="nav-container">
            <div className="logo-container">
                <img className="app-logo" src="https://img.freepik.com/premium-vector/green-food-logo_7297-183.jpg" />
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

const Restaurant = (props) =>{
    const {resName, cuisine} = props
    return(
        <div className="res-card">
            <div className="res-card-img">
                <img className="res-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/08eee882fda81b68e5c36e3a5d89d8c0" />
            </div>
            <div className="res-details">
                <h2>{resName}</h2>
                <p>{cuisine}</p>
                <p>4.3 Star</p>
            </div>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="res-container">
            <Restaurant 
            resName="McDonald's"
            cuisine="American"
            
            />
            <Restaurant 
            resName="Yo-China"
            cuisine="Chinese"
            />
        </div>
        
    )
}

const App = () =>{
    return(
        <>
         <Header />
         <Body />
        </>
)};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);