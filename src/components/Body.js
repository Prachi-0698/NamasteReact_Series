import Restaurant from "./Restaurant";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () =>{

    // Local State Variable - Super Powerful variable
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const[searchText, setSearchText] = useState('')

    useEffect(()=>{
        // console.log('use effect called');
        fetchData();
    }, [])

    const fetchData = async () =>{
       try{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6422668&lng=77.0845962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
    
        
          const json = await data?.json();
        //   console.log(json);
          const test = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          setListOfRes(test)
          setFilteredRestaurant(test)
        //   console.log(listOfRes)
          
       }
       catch(error){
        console.log(error)
       }
        
    }
    // const setNewRes = (json) =>{
    //     console.log("New Res called")
    //     setListOfRes(json)
    //  }

    console.log('Body Rendered');
      // Conditional rendering
    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="filterBtn">
                    <button 
                        className="filter-btn" onClick={() => {
                            console.log('button clicked')
                            const filteredList = listOfRes.filter(
                                (res) => res.data.avgRating > 4
                            );
                            
                            return setListOfRes(filteredList);
                            
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>

                <div className="search-filter">
                        {/* Bind the Search text to input */}
                        <input type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} placeholder="Search Restaurants"></input>
                        <button className="searchBtn" onClick={()=>{
                            // Filter the restaurant cards and update UI
                            // search text
                            console.log(searchText);

                            const filteredRestaurant = listOfRes.filter((restaurant) => restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(filteredRestaurant)
                            
                        }}>Search</button>
                </div>
            </div>
            <div className="res-container">
            {filteredRestaurant?.map((restaurant) =>(
                    <Link key={restaurant.info?.id} to={"/restaurants/" + restaurant.info?.id}><Restaurant resData={restaurant} /></ Link>
                ))
                }
                
            </div>
        </div>
        
    )
}

export default Body;