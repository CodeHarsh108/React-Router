import { useLocation } from "react-router-dom";

const CurrentLocation = () => {
    const location = useLocation();
    return(
        <h1
className="text-center text-2xl font-semibold text-gray-800 my-4"
        >Current Path : {location.pathname}</h1>
    )
};

export default CurrentLocation;