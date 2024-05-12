import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from 'react'


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    function filterRestaurant() {
        setListOfRestaurant(listOfRestaurant.filter((items) => items.info.avgRating > 4.5));
    };
    return (
        <div className="body">
            <div className="filters">
                <button className="filter-btn" onClick={() => { filterRestaurant() }} >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
                {/* <RestaurantCard resData={resList[0]} /> */}
            </div>
        </div>
    );
};

export default Body;