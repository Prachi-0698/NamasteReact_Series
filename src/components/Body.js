import Restaurant from "./Restaurant";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () =>{
    const [listOfRes, setListOfRes] = useState(resList);
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
                    <Restaurant resData={restaurant} key={restaurant.data.id}/>
                ))
                }
                
            </div>
        </div>
        
    )
}

export default Body;