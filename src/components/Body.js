import resList from "../utils/mockData";
import RestCard from "./RestCard";

export const Searchbar = () => {
    return(
        <div className="search-bar">
            <input type="text" className="search-bar"/>

        </div>
    );
};

export const Body = () => {
    return(
        <div className="body">
            <div>
                <Searchbar/>
            </div>
            <div className="rest-container">
               {
                resList.map(restaurant => (<RestCard key={restaurant.data.id} resData={restaurant} />))
               }
            </div>  
        </div>
    );
};

