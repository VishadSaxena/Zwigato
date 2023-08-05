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

                <h1>{name}</h1>
                <h3>{cuisines + (" ")}</h3>
                <h3>{costForTwoMessage}</h3>

            </div>
            <div className="menu">
                <h2>Menu</h2>
                <ul>
                    {itemCards.map( (item) => 
                    (
                        <li key={item.card.info.id}>
                         {item.card.info.name} -- Rs.
                         {item.card.info.defaultPrice/100 || item.card.info.price/100} </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestMenu;