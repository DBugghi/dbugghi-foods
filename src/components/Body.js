import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [apiWaleRestaurants, setApiWaleRestaurants] = useState([]);
  const [above45, setAbove45] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2418194&lng=72.49297159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setApiWaleRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfRestaurants(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const topRated = () => {
    if (!above45) {
      const filteredList = apiWaleRestaurants.filter(
        (res) => res.info.avgRating > 4.5
      );
      setListOfRestaurants(filteredList);
      setAbove45(true);
    } else {
      setListOfRestaurants(apiWaleRestaurants);
      setAbove45(false);
    }
  };

  return apiWaleRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                setListOfRestaurants(apiWaleRestaurants);
                setAbove45(false);
              } else {
                setAbove45(true);
                const filteredRestaurants = apiWaleRestaurants.filter(
                  (res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(e.target.value.trim().toLowerCase()) ||
                    res.info.cuisines
                      .join(", ")
                      .toLowerCase()
                      .includes(e.target.value.trim().toLowerCase())
                );
                setListOfRestaurants(filteredRestaurants);
              }
            }}
          />
        </div>
        <button className="filter-btn" onClick={topRated}>
          {!above45 ? "Top Rated Restuarants" : "Show All"}
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
