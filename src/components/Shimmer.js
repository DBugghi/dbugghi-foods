import { useState, useEffect } from "react";
import Body from "./Body";

const Shimmer = () => {
  const [apiOfCity, setApiOfCity] = useState("");
  const [indexApi, setIndexApi] = useState(undefined);
  const [cityName, setCityName] = useState("");
  const [apiWaleRestaurants, setApiWaleRestaurants] = useState([]);
  const [btnTxt, setBtnTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, [apiOfCity]);

  const fetchData = async () => {
    const data = await fetch(apiOfCity);

    const json = await data.json();
    setApiWaleRestaurants(
      json?.data?.cards[indexApi]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return apiWaleRestaurants.length === 0 ? (
    <>
      <button className="shimmerBtn"
        onClick={() => {
          setCityName("Kalol");
          setApiOfCity(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2418194&lng=72.49297159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          setIndexApi(2);
          setBtnTxt("Loading Kalol's Restraunts");
        }}
      >
        {!btnTxt.includes("Kalol") ? "Check In Kalol" : btnTxt}
      </button>
      <button className="shimmerBtn"
        onClick={() => {
          setCityName("Indore");
          setApiOfCity(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          setIndexApi(1);
          setBtnTxt("Loading Indore's Restraunts")
        }}
      >
        {!btnTxt.includes("Indore") ? "Check In Indore" : btnTxt}
      </button>

      <button className="shimmerBtn"
        onClick={() => {
          setCityName("Kota");
          setApiOfCity(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2138156&lng=75.8647527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
          setIndexApi(1);
          setBtnTxt("Loading Kota's Restraunts")
        }}
      >
        {!btnTxt.includes("Kota") ? "Check In Kota" : btnTxt}
      </button>

      <div className="shimmer-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </>
  ) : (
    <Body cityName={cityName} apiWaleRestaurants={apiWaleRestaurants} />
  );
};

export default Shimmer;
