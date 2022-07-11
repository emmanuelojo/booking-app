import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import "./list.css";
import { HotelInterface } from "../../types/hotel";

type LocationProp = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: {
    date: [
      {
        startDate: Date | undefined;
        endDate: Date | undefined;
        key: string;
      }
    ];
    destination: string;
    options: {
      adults: number;
      children: number;
      rooms: number;
    };
  };
};

const List = () => {
  const location = useLocation();
  console.log("location: ", location);

  location.state as LocationProp;

  // const place = location.state

  // const [destination, setDestination] = useState("");

  // const [date, setDate] = useState([]);

  // const [options, setOptions] = useState({});

  // if (location.state !== null) {
  //   setDestination(location.state.destination as string);

  //   setDate(location.state.date);

  //   setOptions(location.state.options);
  // }

  // const [destination, setDestination] = useState(location.state !== null ? location.state.destination : '');

  const [destination, setDestination] = useState(location.state.destination);

  const [date, setDate] = useState(location.state.date);

  const [options, setOptions] = useState(location.state.options);

  // const [destination, setDestination] = useState('');

  // const [date, setDate] = useState(undefined);

  // const [options, setOptions] = useState(undefined);

  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(undefined);

  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8000/api/v1/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );

  // if (location.state !== null) {
  //   setDestination(location.state.destination as string);

  //   setDate(location.state.date);

  //   setOptions(location.state.options);
  // }

  const handleClick = () => {
    reFetch()
  }

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
              <input
                type="text"
                placeholder="Destination"
                defaultValue={destination}
                onChange={e => setDestination(e.target.value)} 
              />
            </div>
            <div className="searchItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} style={{ fontSize: 12,}}>
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
                  <input type="number" min={1}  onChange={e => setMin(e.target.value)} className="searchOptionInput" />
                </div>

                <div className="searchOptionItem">
                  <span className="searchOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" min={1} onChange={e => setMax(e.target.value)}  className="searchOptionInput" />
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

            <button onClick={handleClick} >Search</button>
          </div>

          <div className="listResult">
            {loading ? (
              "Loading..."
            ) : (
              <>
                {" "}
                {data &&
                  data.map((item: HotelInterface) => (
                    <SearchItem item={item} key={item._id}/>
                  ))}
              </>
            )}
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
