import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";

const Body = () => {
    //Local state variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [apiWaleRestaurants, setApiWaleRestaurants] = useState([]);
    const [above45, setAbove45] = useState(false);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2418194&lng=72.49297159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
        const json = await data.json();
        setApiWaleRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        if(!above45){                           
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setListOfRestaurants(filteredList);
                            setAbove45(true);
                        } 
                        else{
                            setListOfRestaurants(apiWaleRestaurants); 
                            setAbove45(false);
                        }
                    }}    
                >
                    {!above45 ? "Top Rated Restuarants" : "Show All"}
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => <RestrauntCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;