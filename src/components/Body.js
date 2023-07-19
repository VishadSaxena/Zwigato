
import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
   const [ListOfRest, setListOfRest] = useState([]);

   const [filteredListOfRest, setFilteredListOfRest] = useState([]);

   const [searchItem, setSearchItem] = useState("");

   useEffect(() => {

    fetchData();

   }, []);

   const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.834702025354822&lng=80.88480837643147&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRest(json?.data?.cards[2]?.data?.data?.cards);

    setFilteredListOfRest(json?.data?.cards[2]?.data?.data?.cards);

    }

    if(ListOfRest.length === 0){
        return < Shimmer />
    }

        return(
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" value={searchItem} onChange={
                        (e) => {
                            setSearchItem(e.target.value);
                            console.log("Body Rendered");
                        } } 
                        />
                    <button className="search" onClick={ () => {
                        const filteredRest = ListOfRest.filter((res) =>  res.data.name.toLowerCase().includes(searchItem.toLowerCase()) );

                        setFilteredListOfRest(filteredRest);
                    }}
                    >
                    Search
                    </button>
                </div>
                <div>
                    <button className="btn-modify" onClick={() => {
                        const filterList = ListOfRest.filter((res) => res.data.avgRating > 4);
                        setFilteredListOfRest(filterList);
                    }}>Top Restaurant</button>
                </div>
                <div className="rest-container">
                {
                    filteredListOfRest.map(restaurant => (<RestCard key={restaurant.data.id} resData={restaurant} />) )
                }
                </div>  
            </div>
        </div>
    );
};

export default Body;