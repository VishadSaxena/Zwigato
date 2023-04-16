
import { useState } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData";



const Body = () => {
   const [ListOfRest, setListOfRest] = useState(resList);
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
                ListOfRest.map(restaurant => (<RestCard key={restaurant.data.id} resData={restaurant} />))
               }
            </div>  
        </div>
    );
};

export default Body;