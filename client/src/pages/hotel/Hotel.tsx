import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const photos = [
    {
      id: 1,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
    {
      id: 4,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
    {
      id: 5,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
    {
      id: 6,
      url: "https://media.istockphoto.com/photos/guest-bedroom-with-a-queen-sized-bed-and-nightstand-at-a-short-term-picture-id1336925615?b=1&k=20&m=1336925615&s=170667a&w=0&h=Kj0woErKXcYjj1L0z1yddfPvHbkc11CoN5f1dVdKx60=",
    },
  ];

  const handleOpen = (id: number) => {
    setOpenSlider(true);
    setSlideNumber(id);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if(direction === 'l') {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber -1
    }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <p>{slideNumber}</p>
            <FontAwesomeIcon onClick={() => setOpenSlider(false)} icon={faCircleXmark} className="close"/>
            <FontAwesomeIcon icon={faCircleArrowLeft} onClick={() => handleMove('l')} className="arrow-left" />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].url}
                alt="image"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}  onClick={() => handleMove('r')} className="arrow-right"/>
          </div>
        )}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Dugbe St NYC</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="priceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, idx) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(idx)}
                  src={photo.url}
                  alt="Image"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Kuvuku land</h1>
              <p className="hotelDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                illum ratione blanditiis. Laudantium debitis vitae sunt quod
                totam placeat, veritatis eaque est impedit quisquam repudiandae
                voluptas voluptatem molestias omnis! Laudantium?{" "}
              </p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>

              <span>Located in the real heart of Wakanda</span>

              <h2>
                <b>$456</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
