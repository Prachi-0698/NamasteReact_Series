import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) =>{
    console.log(items);
    return(
        <>
            {items.map(item => 
            <div key={item.card.info.id} className="p-2 m-2 flex justify-between border-gray-400 border-b text-left"> 
                <div className="w-9/12 ">
                    <div className="py-2" >
                        <span>{item.card.info.name}</span>
                        <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                        <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="p-4 w-2/12 relative">
                    <div> 
                        <img className="w-32 h-20 rounded-md" src={CDN_URL + item?.card?.info?.imageId} />
                    </div>                   
                    <div className="absolute bottom-4 right-[32px]"> 
                        <button className=" text-white rounded-md font-bold p-1  bg-green-500/75 hover:bg-green-700/100">ADD+</button>
                    </div>
                    
                </div>
            </div>
            )}
        </>
    );

}

export default ItemList;