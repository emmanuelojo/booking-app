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
import React, { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  type: string;
};
type DateRangeInterface = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string;
};

const Header: React.FC<HeaderProps> = ({ type }) => {
  const [destination, setDestination] = useState("");

  const [openDate, setOpenDate] = useState(false);

  // const [date, setDate] = useState([
  //   { startDate: new Date(), endDate: new Date(), key: "selection" },
  // ]);

  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);

  const [selectionRange, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name: string, operation: string) => {
    // setOptions(prev => { return {
    //   ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
    // }})
    // if(name === 'adults') operation === 'i' ? setOptions(options.adults +1)
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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

        {type !== "list" && (
          <>
            {" "}
            <h1 className="headerTitle">
              {" "}
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels. Unlock instant savings of 10% or
              more with a free lamaBooking account
            </p>
            <button className="headerBtn"> Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  onChange={(e) => setDestination(e.target.value)}
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {/* {" "}
              {`${
                format(date[0].startDate, "dd/MM/yyyy") +
                " to " +
                format(date[0].endDate, "dd/MM/yyyy")
              }`}{" "} */}{" "}
                  {`${
                    format(selectionRange[0].startDate, "dd/MM/yyyy") +
                    " to " +
                    format(selectionRange[0].endDate, "dd/MM/yyyy")
                  }`}{" "}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    ranges={date}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    minDate={new Date()}
                    className="date"
                  />
                  // <DateRange
                  //   editableDateInputs={true}
                  //   ranges={selectionRange}
                  //   onChange={(item) => setRange([item.selection])}
                  //   moveRangeOnFirstSelection={false}
                  //   minDate={new Date()}
                  //   className="date"
                  // />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {" "}
                  {`${
                    options.adults +
                    " adult . " +
                    options.children +
                    " children . " +
                    options.rooms +
                    " rooms"
                  }`}{" "}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText"> Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adults <= 1}
                          onClick={() => handleOption("adults", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.adults}{" "}
                        </span>
                        <button
                          onClick={() => handleOption("adults", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.children}{" "}
                        </span>
                        <button
                          onClick={() => handleOption("children", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText"> Rooms </span>
                      <div className="optionCounter">
                        <button
                          disabled={options.rooms <= 1}
                          onClick={() => handleOption("rooms", "d")}
                          className="optionCounterBtn"
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.rooms}{" "}
                        </span>
                        <button
                          onClick={() => handleOption("rooms", "i")}
                          className="optionCounterBtn"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button onClick={handleSearch} className="headerBtn">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
