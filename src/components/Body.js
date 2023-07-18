
import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
   const [ListOfRest, setListOfRest] = useState([]);

   useEffect(() => {

    fetchData();

   }, []);

   const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.834702025354822&lng=80.88480837643147&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRest(json.data.cards[2].data.data.cards);

    }

    if(ListOfRest.length === 0){
        return < Shimmer />
    }

        return(
        <div className="body">
            <div>
                <button className="btn-modify" onClick={() => {
                    const filterList = ListOfRest.filter((res) => res.data.avgRating > 4);
                    setListOfRest(filterList);
                }}>Top Restaurant</button>
            </div>
            <div className="rest-container">
               {
                ListOfRest.map(restaurant => (<RestCard key={restaurant.data.id} resData={restaurant} />) )
               }
            </div>  
        </div>
    );
};

export default Body;