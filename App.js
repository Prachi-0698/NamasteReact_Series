import React from "react";
import ReactDOM  from "react-dom/client";

const resList = [
{
    type: "restaurant",
    data: {
        id: "253714",
        name: "McDonald's",
        cloudinaryImageId: "08eee882fda81b68e5c36e3a5d89d8c0",
        costForTwo: "₹400 for two",
        cuisines: ["American"],
        avgRating: 4.3,
    }
  },
  {
    type: "restaurant",
    data: {
        id: "24169",
        name: "Domino's Pizza",
        cloudinaryImageId: "thpfejw6tl4xcsjogkgz",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas","Italian","Pastas","Desserts"],
        avgRating: 4.1
    }
  },
  {
    type: "restaurant",
    data: {
        id: "32127",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1
    }
  },
  {
    type: "restaurant",
    data: {
        id: "326429",
        name: "Punjabi Angithi",
        cloudinaryImageId: "lgfkquq3npd3r9oiy62b",
        costForTwo: "₹400 for two",
        cuisines: ["North Indian","Chinese","Punjabi","Snacks"],
        avgRating: 4.1
    }
  },
  {
    type: "restaurant",
    data: {
        id: "26713",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"],
        avgRating: 4
    } 
  }
]
  

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
    const {resData} = props;
    const {cloudinaryImageId, name, 
            cuisines,costForTwo, avgRating}  = resData?.data

    return(
        <div className="res-card">
            <div className="res-card-img">
            <img className="res-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
            </div>
            <div className="res-details">
                <h2>{name}</h2>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="res-container">
            {resList.map((restaurant) =>(
                <Restaurant resData={restaurant} key={restaurant.data.id}/>
            ))
            }
            
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