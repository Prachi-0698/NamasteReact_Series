import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
import { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCategory = ({data}) =>{
    const [showItems, setShowItems] = useState(false)

    const handleClick = () =>{
        // console.log("clicked");
        setShowItems(!showItems)
    }
    // console.log(data);
    return (
           <div className="w-1/2 mx-auto my-4 p-2 bg-gray-100 shadow-sm ">
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-gray-600 text-lg '>{data.title} ({data.itemCards.length})</span>
                <span>{showItems ? <MdKeyboardArrowUp className='text-gray-600' size={30}/> : <MdKeyboardArrowDown className='text-gray-600' size={30}/>}</span>
            </div>
                {/* <ItemList items={data?.itemCards} /> */}
                {showItems && <ItemList items={data?.itemCards} />}
           </div>
            
    );
};

export default RestaurantCategory;