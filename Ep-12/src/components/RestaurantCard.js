import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info;


    return (<div className="res-card m-4 p-4 w-[230px] rounded-lg bg-gray-100 hover:bg-gray-300" >
        <img className="res-logo rounded-lg" src={CDN_URL + cloudinaryImageId} alt="companyThumbnail" />
        <h3 className="font-bold py-4 text-l">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>);
};

export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (

            <div>
                <label className="absolute bg-green-500 text-white p-2 m-2 rounded-lg">Veg Only</label>
                <RestaurantCard {...props} />
            </div>


        );
    }
};

export default RestaurantCard;