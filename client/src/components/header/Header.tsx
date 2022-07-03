import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCalendar,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span> Airport Taxis</span>
          </div>
        </div>

        <h1 className="headerTitle"> A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
            Get rewarded for your travels. Unlock instant savings of 10% or more with a free lamaBooking account
        </p>
        <button className="headerBtn"> Sign in / Register</button>

        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span className="headerSearchText"> date to date</span>
            </div>

            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span className="headerSearchText"> 2 adults 1 child 1 room</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
