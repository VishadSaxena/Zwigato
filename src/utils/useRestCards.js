import { useEffect, useState } from "react";

const useRestCards = () => {
    
    const [restCards,setRestCards] = useState([]);

    useEffect( () => {
        fetchData();
    },[]);

    const fetchData = async () => {
    
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6342587&lng=85.0584152&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
    
        setRestCards(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
    return restCards;
};

export default useRestCards;


   
    