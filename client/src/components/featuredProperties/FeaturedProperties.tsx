import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { HotelInterface } from "../../types/hotel";


const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/v1/hotels?featured=true&limit=3"
  );

  return (

    <div className="fp">
      {loading ? (
        "loading"
      ) : (
        <>
        {data.data && data.data.map((item: HotelInterface, idx: number) => (
          <div className="fpItem" key={idx}>
            <img src={item.photos[0]} alt="image" className="fpImg" />
            <span className="fpName"> {item.name} </span>
            <span className="fpCity"> {item.city} </span>
            <span className="fpPrice">
              Starting from ${item.cheapestPrice}
            </span>

            {item.rating && (
              <div className="fpRating">
                <button> {item.rating} </button>
                <span>
                  {" "}
                  {item.rating > 8
                    ? "Excellent"
                    : item.rating < 4
                    ? "Poor"
                    : "Good"}{" "}
                </span>
              </div>
            )}
          </div>
        ))}
      </>
      )}
    </div>
  );
};

export default FeaturedProperties;
