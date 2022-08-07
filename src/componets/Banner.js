import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <h1> Show Date Picker</h1>}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and strech your imagination.</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden germs near you.
        </h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
