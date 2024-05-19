import RestrauntCard from "./RestrauntCard";
import mockData from "../utils/mockdata";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {mockData.map(restraunt => <RestrauntCard key={restraunt.info.id} resData={restraunt}/>)}
            </div>
        </div>
    )
}

export default Body;