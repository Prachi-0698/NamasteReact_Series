import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)

   

    if (resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

    return (
        <div className="text-center">
            <div className="flex flex-col justify-center items-center">
                <div className="font-bold mt-5">
                    <h2 className="text-left">{name}</h2>
                </div>

                <div>
                    <h2 className="font-light">{cuisines.join(", ")}</h2>
                    <h3 className="font-light">{costForTwoMessage}</h3>
                    <p className="border-b m-3 w-full"></p>
                    
                </div>

                {categories.map((category) => <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
                )}
                
                
            </div>
            
            
            
        </div>
    );
}

export default RestaurantMenu;