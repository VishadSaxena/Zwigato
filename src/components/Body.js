import { useState, useEffect } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestCards from "../utils/useRestCards";


const Body = () => {

  const [ListOfRest,setListOfRest] = useState([]); 

   const [filteredListOfRest, setFilteredListOfRest] = useState([]);

   const [searchItem, setSearchItem] = useState("");

   useEffect(() => {

    fetchData();

   }, []);

   const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6342587&lng=85.0584152&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredListOfRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    

 

    

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === "false")
    {
        return (
        <h1> There seems to be some issue with your connection!!!</h1>
        );
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
                        const filteredRest = ListOfRest.filter((res) =>  res.info.name.toLowerCase().includes(searchItem.toLowerCase()) );

                        setFilteredListOfRest(filteredRest);
                    }}
                    >
                    Search
                    </button>
                </div>
                <div>
                    <button className="btn-modify" onClick={() => {
                        const filterList = ListOfRest.filter((res) => res.info.avgRating > 4);
                        setFilteredListOfRest(filterList);
                    }}>Top Restaurant</button>
                </div>
                <div className="rest-container">
                {
                    filteredListOfRest.map(restaurant => (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestCard resData={restaurant} /></Link>) )
                }
                </div>  
            </div>
        </div>
    );
};

export default Body;