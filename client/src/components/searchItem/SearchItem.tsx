import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItemContainer">
      <img
        src="https://media.istockphoto.com/photos/gamer-room-picture-id1334503591?b=1&k=20&m=1334503591&s=170667a&w=0&h=ma4969dCciSQbscjVCBmNdIG5Umon2VWwe-ZA3GZ55U="
        alt="Image"
        className="searchItemImg"
      />

      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Tower Street Apartments</h1>
        <span className="searchItemDistance">500m from center</span>
        <span className="taxiOpt">Free airport taxi</span>
        <span className="subTitle">Studio Apartment with AC</span>
        <span className="features"> Entire studio + 1 bathroom + 1 full bed </span>
        <span className="cancelOpt">Free cancellation</span>
        <span className="cancelOptSubtitle">You can cancel later, so lock in this great price today</span>
      </div>

      <div className="searchItemDetails">
        <div className="rating">
            <span>Excellent</span>

            <button>8.9</button>
        </div>

        <div className="detailsText">
            <span className="price">$234</span>
            <span className="tax">Includes taxes and fees</span>

            <button className="availability">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
