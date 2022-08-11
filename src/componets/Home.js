import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListing } from "../Actions/ListingAction";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading....</h2>
      ) : error ? (
        <h>{error}</h>
      ) : (
        <div className="home_section">
          {listings.map((listing) => (
            <Card
              src={listing.img}
              title={listing.title}
              description={listing.description}
              price={listing.price}
            />
          ))}
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/efe5ecfa-1173-4e8b-8c38-39a6f30a8b6a.jpg?im_w=720"
          title="Entire chalet hosted by Kirsten Slater"
          description="A charming and neat log beach house in the heart of South Africas Garden route ."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/72fc7bb6-5be4-461d-b27b-8dcf52e48a0b.jpg?im_w=720"
          title="Entire home hosted by Simon"
          description="A stunning house filled with bright, natural light. River frontage and valley and mountain views."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/monet/Luxury-53856003/original/5d322f83-1ec7-4f65-958f-a60ef4b1b436?im_w=1200"
          title="Online experience"
          description="Unique activities we can do together"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/80e1cfd1-5abf-4ff8-9ab1-d8a8d5d66679.jpg?im_w=960"
          title="Entire villa hosted by Mothomang"
          description="The home is situated on the River! It is styled elegantly minimalist with a French Provence ambience. "
        />
      </div> */}

      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/a97b3fcf-0745-47ce-9ea8-2d32b5d5924b.jpg?im_w=720"
          title="Entire chalet hosted by Kirsten Slater"
          description="A charming and neat log beach house in the heart of South Africas Garden route ."
          price="R7,800 ZAR
          "
        />

        <Card
          src="https://a0.muscache.com/im/pictures/458b823a-4e5f-4766-9014-660590b070c8.jpg?im_w=960"
          title="Entire home hosted by Stan"
          description="Tamboti River Lodge is an award winning 5 * luxury self catering lodge on the banks of the Crocodile River. We are located in Mjejane, South Africa's premier private wildlife estate and part of the Greater Kruger National Park. "
          price="R9,800 ZAR
          "
        />

        <Card
          src="https://a0.muscache.com/im/pictures/efe5ecfa-1173-4e8b-8c38-39a6f30a8b6a.jpg?im_w=720"
          title="Private room in rental unit hosted by Lucille"
          description="Stille Woning Guest House in White River offers value for money and first class accommodation."
          price="R2,033 ZAR"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/ccc4949f-380f-401a-8bca-f7fd28137e07.jpg?im_w=960"
          title="Entire home hosted by Belinda"
          description="Welcome to Clarens Grand Villa."
          price="R3,400 ZAR"
        />
      </div> */}
    </div>
  );
};

export default Home;
