import React from "react";
import "./searchItem.css";
import { HotelInterface } from "../../types/hotel";
import { Link, Route } from "react-router-dom";

const SearchItem = ({ item }: { item: HotelInterface }) => {
  // export const SearchItem: React.FC<HotelInterface> = () => {
  return (
    <div className="searchItemContainer">
      {item.photos[0] && (
        <img src={item.photos[0]} alt="Image" className="searchItemImg" />
      )}

      <div className="searchItemDesc">
        <h1 className="searchItemTitle"> {item.name} </h1>
        <span className="searchItemDistance">{item.distance}m from center</span>
        <span className="taxiOpt">Free airport taxi</span>
        <span className="subTitle">Studio Apartment with AC</span>
        <span className="features"> {item.description}</span>
        <span className="cancelOpt">Free cancellation</span>
        <span className="cancelOptSubtitle">
          You can cancel later, so lock in this great price today
        </span>
      </div>

      <div className="searchItemDetails">
        {item.rating && (
          <div className="rating">
            <span>
              {" "}
              {item.rating > 8
                ? "Excellent"
                : item.rating < 4
                ? "Poor"
                : "Good"}{" "}
            </span>

            <button> {item.rating} </button>
          </div>
        )}

        <div className="detailsText">
          <span className="price">${item.cheapestPrice}</span>
          <span className="tax">Includes taxes and fees</span>

          <Link to={`/hotels/${item._id}`}>
            <button className="availability">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
