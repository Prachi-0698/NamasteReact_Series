import Restaurant from "./Restaurant";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

    // const onlineStatus = useOnlineStatus();

    // if(onlineStatus === false) 
    // return(
    //     <div>
    //         <h1>Ooops! ....Looks like you're offline</h1>
    //         <h2>Please check your Internet connection</h2>
    //     </div>        
    //     )

    console.log('Body Rendered');
      // Conditional rendering
    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex justify-between mt-4 mx-6 ">
                <div className="mt-2">
                    <button 
                        className="border m-3 p-2 bg-orange-300 text-white text-bold rounded-xl" onClick={() => {
                            // console.log('button clicked')
                            // console.log("Filter", listOfRes);
                            const filteredList = listOfRes.filter(
                                (res) => res?.info?.avgRating > 4      
                            );
                           
                            
                            console.log(filteredList)
                            
                           return setListOfRes(filteredList);
                            
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>

                <div className="search-filter">
                        {/* Bind the Search text to input */}
                        <input className="m-3 p-2 rounded-md border-0 bg-transparent outline-0 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-300 placeholder:p-2 " type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value)
                        }} placeholder="Search Restaurants"></input>
                        <button className="p-2 px-4 bg-orange-300 text-white text-bold rounded-xl" onClick={()=>{
                            // Filter the restaurant cards and update UI
                            // search text
                            console.log(searchText);

                            const filteredRestaurant = listOfRes.filter((restaurant) => restaurant.info?.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(filteredRestaurant)
                            
                        }}>Search</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
            {filteredRestaurant?.map((restaurant) =>(
                    <Link key={restaurant.info?.id} to={"/restaurants/" + restaurant.info?.id} className='pr-4'><Restaurant resData={restaurant} /></ Link>
                ))
                }
                
            </div>
        </div>
        
    )
}

export default Body;