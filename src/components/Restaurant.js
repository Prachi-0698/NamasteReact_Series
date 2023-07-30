import { CDN_URL } from "../utils/constants";

const Restaurant = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, 
            cuisines,costForTwo, avgRating}  = resData?.data

    return(
        <div className="res-card">
            <div className="res-card-img">
            <img className="res-img" src={CDN_URL + cloudinaryImageId }/>
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

export default Restaurant;