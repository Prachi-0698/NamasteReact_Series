import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

   

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu-container">
            <div className="restro-info">
                <h2>{name}</h2>
                <h2>{cuisines.join(", ")}</h2>
                <h3>{costForTwoMessage}</h3>
            </div>
            
            <div className="dishes-box">
                <ul>
                    
                        {itemCards.map((item)=> 
                            <div className=" restro-dishes" key={item?.card?.info?.id}>
                                <li >{item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                            </div>
                        )}
                        {/* <li>{itemCards[0].card.info.name}</li>
                        <li>{itemCards[1].card.info.name}</li>
                        <li>{itemCards[2].card.info.name}</li> */}
                    
                    
                </ul>
            </div>
            
        </div>
    );
}

export default RestaurantMenu;