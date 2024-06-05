import RestrauntCard from "./RestrauntCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //Local state variable - Super powerful variable
    const [listOfRestuarants, setListOfRestaurant] = useState(mockData);
    const [above45, setAbove45] = useState(false);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        if(!above45){                           
                            const filteredList = listOfRestuarants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            setListOfRestaurant(filteredList);
                            setAbove45(true);
                        } 
                        else{
                            setListOfRestaurant(mockData); 
                            setAbove45(false);
                        }
                    }}    
                >
                    {!above45 ? "Top Rated Restuarants" : "Show All"}
                </button>
            </div>
            <div className="res-container">
                {listOfRestuarants.map((restaurant) => <RestrauntCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;