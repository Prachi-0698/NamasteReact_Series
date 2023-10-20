import { CDN_URL } from "../utils/constants";


const Restaurant = (props) =>{
    // console.log(props)
    const {resData} = props;
    // console.log(resData?.card?.card)
    // console.log(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    const {name, cuisines,costForTwo, 
           avgRating, cloudinaryImageId}  = resData?.info;

    // console.log(cloudinaryImageId)
    // console.log(resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

            
    return(
        <div className="res-card">
            
            <div className="res-card-img">
            <img className="res-img" src={CDN_URL + resData?.info?.cloudinaryImageId  }/>
            </div>
            <div className="res-details">
                <h2>{name}</h2>
                <p>{cuisines?.join(', ')}</p>
                <p>{avgRating}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

export default Restaurant;