import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import useResDetails from "../utils/useResDetails";
import RestaurantCategory from "./RestaurantCategory";

const RestMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestMenu(resId);

    const resDetails = useResDetails(resId);

    const dummy = "Dummy data";

    const [showIndex,setShowIndex] = useState(null);

    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const {name, cuisines, costForTwoMessage} = resDetails;

    if(resInfo.length === 0)
       return <Shimmer />
       
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    

    return (

        
        <div>
            <div className="restDetails">

                <h1 className="font-extrabold text-5xl text-center m-4  bg-orange-200">{name}</h1>
                <div className="flex flex-wrap justify-between font-normal text-2xl mb-4">
                    <h3>{cuisines + (" ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-3xl">Menu</h1>
                    {
                        categories.map((category) => <RestaurantCategory key={category.card.card.title} data={category.card.card}/>)}
                </div>
            </div>
        </div>
    );
};

export default RestMenu;