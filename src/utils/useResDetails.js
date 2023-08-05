import { useState, useEffect } from "react";

const useResDetails = (resId) => {

    const [resDetails, setResDetails] = useState([]);

    useEffect(() => { 
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.834702025354822&lng=80.88480837643147&restaurantId=" + resId +"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        setResDetails(json?.data?.cards[0]?.card?.card?.info);
    };

    return (resDetails);
};

export default useResDetails;