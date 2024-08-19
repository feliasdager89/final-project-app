import React from "react";
import Listings from "../Listings";
import Navbar from "./Navbar";


const Home: React.FC = () => {
    return (
        <div>
            <Navbar/>
            <h1>Homecare Provider Listings</h1>
            <Listings />
        </div>
    );
};

export default Home;