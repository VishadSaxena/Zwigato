import { IMG_URL } from "../utils/constants";

const RestCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId, name, avgRating, cuisines} = resData?.info;

    const {deliveryTime} =resData?.info?.sla;

    return(
        <div className="h-{500px} w-56 p-4 m-4 border-solid bg-orange-200 hover:bg-orange-300 rounded-lg">
            <img className="food-pic rounded-lg" alt="Food Pic" src={IMG_URL
                +cloudinaryImageId}></img>
            <h3 className="font-bold mb-4 text-xl">{name}</h3>
            <div className="flex flex-wrap justify-between py-2">
                <h4 >{avgRating} stars</h4>
                <h4>{deliveryTime} mins</h4>
            </div>
            <h4 className="font-semibold" >{cuisines.join(", ")}</h4>
        </div>
    );
};

export default RestCard;   

