import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p> 62 stays . 26 August to 30 August . 2 Guest</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Canceliation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">MoreFilters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/92b865b8-b2bf-4a4e-ae7f-5cb975e2e3e9.jpg?im_w=720"
        location="Marrakech, Moroco"
        title="Stay in this spacious house"
        description="1 Guest . 1 Bedroom .1.5 shared bathroom . wifi"
        star={4.73}
        price="$10 /night"
        total="$50 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/f4f3ee2e-4eb7-47c8-b64c-f98b01ac2134.jpg?im_w=720"
        location="Shakaria, Jordan"
        title="Stay in this spacious house"
        description="1 Guest . 1 Bedroom .1.5 shared bathroom . wifi"
        star={4.83}
        price="$25 /night"
        total="$100 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/42acdca0-1783-48b1-b421-c58915efff5c.jpg?im_w=720"
        location="Kadijao County, Kenya"
        title="Stay in this spacious house"
        description="1 Guest . 1 Bedroom .1.5 shared bathroom . wifi"
        star={4.8}
        price="$15 /night"
        total="$45 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720"
        location="Wadi Rum, Jordan"
        title="Stay in this spacious house"
        description="1 Guest . 1 Bedroom .1.5 shared bathroom"
        star={4.2}
        price="$14 /night"
      />
    </div>
  );
};

export default SearchPage;
