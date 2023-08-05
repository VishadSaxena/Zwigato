import { useEffect, useState } from "react";


const useRestMenu = (resId) => {

    const [resMenu, setResMenu] = useState([]);
    
    useEffect(() => { 
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.834702025354822&lng=80.88480837643147&restaurantId=" + resId +"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    };



    return (resMenu);
};

export default useRestMenu;