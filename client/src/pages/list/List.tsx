import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import "./list.css";

const List = () => {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);

  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div className="hotelsContainer">
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="searchItem">
              <label>Destination</label>
              <input type="text" placeholder="Destination" />
            </div>
            <div className="searchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd-MM-yyyy")} to ${format(
                  date[0].endDate,
                  "dd-MM-yyyy"
                )}`}
              </span>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate(item.selection)}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="searchItem">
              <label>Options</label>
              <div className="searchOptions">
                <div className="searchOptionItem">
                  <span className="searchOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" min={0} className="searchOptionInput" />
                </div>

                <div className="searchOptionItem">
                  <span className="searchOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" min={0} className="searchOptionInput" />
                </div>

                <div className="searchOptionItem">
                  <span className="searchOptionText">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="searchOptionInput"
                    placeholder={options.adults}
                  />
                </div>
                <div className="searchOptionItem">
                  <span className="searchOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="searchOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="searchOptionItem">
                  <span className="searchOptionText">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    className="searchOptionInput"
                    placeholder={options.rooms}
                  />
                </div>
              </div>
            </div>

            <button>Search</button>
          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>

      <MailList />
      <Footer />

{/* 

      <div className="lfooter">
        <Footer />
      </div>
      <Footer /> */}
    </div>
  );
};

export default List;
