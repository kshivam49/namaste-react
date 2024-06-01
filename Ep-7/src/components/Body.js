import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";


const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

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


    if (listOfRestaurant.length == 0) {
        return <Shimmer />
    }
    return (
        <div className="body">
            <div className="filters">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {


                        const filteredList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredList);
                    }}> Search</button>
                </div>


                <button className="filter-btn" onClick={filterRestaurant} >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant} />))}
                {/* <RestaurantCard resData={resList[0]} /> */}
            </div>
        </div>
    );
};

export default Body;