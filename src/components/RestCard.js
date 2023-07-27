import { IMG_URL } from "../utils/constants";

const RestCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating, cuisines} = resData?.info;

    const {deliveryTime} =resData?.info?.sla;

    return(
        <div className="rest-card">
            <img className="food-pic" alt="Food Pic" src={IMG_URL
                +cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} mins</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    );
};

export default RestCard;   

