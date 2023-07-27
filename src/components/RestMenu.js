import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestMenu = () => {

    const [resMenu, setResMenu]= useState([]);
    
    const [resDetails, setResDetails] = useState([]);
    
    const { resId } = useParams();
 
    useEffect(() => {
        fetchMenu();
    },[]);


    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.834702025354822&lng=80.88480837643147&restaurantId=" + resId +"&catalog_qa=undefined&submitAction=ENTER" );

        const json = await data.json();


        setResDetails(json?.data.cards[0]?.card?.card?.info);
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    }

  
    const {itemCards} = resMenu;

    if(resMenu.length === 0)
       return <Shimmer />

    return (

        
        <div>
            <div className="restDetails">

                <h1>{resDetails.name}</h1>
                <h3>{resDetails.cuisines.join(",")}</h3>
                <h3>{resDetails.costForTwoMessage}</h3>

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