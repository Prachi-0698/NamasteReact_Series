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
        console.log("Use effect called")
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6422668&lng=77.0845962&collection=83645&isNewCollectionFlow=true&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();
        json.data.cards.splice(0,3)
        console.log(json)
        console.log(json.data.cards)
        setListOfRes(json?.data.cards)
     
      
    //   /
    }
    // const setNewRes = (json) =>{
    //     console.log("New Res called")
    //     setListOfRes(json)
    //  }

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
                {listOfRes?.map((restaurant) =>(
                    <Restaurant resData={restaurant} key={restaurant?.card.card.info.id}/>
                ))
                }
                
            </div>
        </div>
        
    )
}

export default Body;