import { useState, useEffect } from "react";

const RestaurantMenu = () =>{
    const[resInfo, setResInfo] = useState([]);

    useEffect(() =>{
        fetchMenu();
    }, [])

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6422668&lng=77.0845962&restaurantId=326440&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json();
        setResInfo(json);
        // console.log(json.data.cards);  
    }

    // const {name } = resInfo?.data.cards[0]?.card?.card?.info;
    return (

        <div>
            <h2>{name}</h2>
        </div>
    )
}

export default RestaurantMenu;