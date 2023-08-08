import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import useResDetails from "../utils/useResDetails";

const RestMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestMenu(resId);

    const resDetails = useResDetails(resId);

    const {itemCards} = resInfo;

    const {name, cuisines, costForTwoMessage} = resDetails;

    if(resInfo.length === 0)
       return <Shimmer />
       
  

    return (

        
        <div>
            <div className="restDetails">

                <h1 className="font-bold text-5xl text-center m-4  bg-orange-200">{name}</h1>
                <div className="flex flex-wrap justify-between font-normal text-2xl mb-4">
                    <h3>{cuisines + (" ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
            </div>
            <div className="min-w-fit border-solid text-center  bg-orange-200">
                <h2 className="text-center text-3xl mb-4  bg-orange-100">Menu</h2>
                <ul>
                    {itemCards.map( (item) => 
                    (
                        <li className="m-2" key={item.card.info.id}>
                         {item.card.info.name} -- Rs.
                         {item.card.info.defaultPrice/100 || item.card.info.price/100} </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestMenu;