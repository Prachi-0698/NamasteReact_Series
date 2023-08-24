import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () =>{
    const [listOfRes, setListOfRes] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () =>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6422668&lng=77.0845962&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      console.log(json)

      setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return(
        <div className="body">
            <div className="filter">
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
            <div className="res-container">
                {listOfRes.map((restaurant) =>(
                    <Restaurant resData={restaurant} key={restaurant?.card.card.id}/>
                ))
                }
                
            </div>
        </div>
        
    )
}

export default Body;