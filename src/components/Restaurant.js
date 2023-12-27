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
        <div className="m-4 p-4 w-[250px]
        transition-transform transform hover:scale-95">
            <img className="rounded-lg w-[650px] h-52" src={CDN_URL + resData?.info?.cloudinaryImageId  }/>
            
            <div className="ml-1 mt-3"> 
                <h2 className="font-semibold text-xl line-clamp-1">{name}</h2>
                <h2 className='font-semibold text-l'>⭐ {avgRating}</h2>
                <p className='line-clamp-1'>{cuisines?.join(', ')}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}

export default Restaurant;