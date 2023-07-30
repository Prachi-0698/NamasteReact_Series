import Restaurant from "./Restaurant";
import resList from "../utils/mockData";


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

export default Body;