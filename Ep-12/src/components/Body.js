import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    const RestaurantCardVegOnly = withVegLabel(RestaurantCard);
    console.log(listOfRestaurant)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function filterRestaurant() {
        setFilteredRestaurant(listOfRestaurant.filter((items) => items.info.avgRating > 4.5));
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline!! Please check your internet connection.</h1>
        )
    }

    if (listOfRestaurant.length == 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filters flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {


                        const filteredList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredList);
                    }}> Search</button>
                </div>


                <div className="m-4 p-4 flex items-center">

                    <button className="filter-btn px-4 py-2 bg-orange-200 rounded-lg" onClick={filterRestaurant} >Top Rated Restaurant</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link style={{ textDecoration: "none" }} to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                        {restaurant.info.veg ? <RestaurantCardVegOnly resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
                    </Link>
                ))}
                {/* <RestaurantCard resData={resList[0]} /> */}
            </div>
        </div>
    );
};

export default Body;