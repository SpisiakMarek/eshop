import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import CarouselElement from "./CarouselElement";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Carousel as Carousel2 } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carousel() {
  const refs = useRef([]);
  const elements = [
    {
      id: "1. picture.jpg",
      src: require("../assets/homebarCarousel/1. picture.jpg"),
      text: "boty 1",
    },
    {
      id: "2. picture.jpg",
      src: require("../assets/homebarCarousel/2. picture.jpg"),
      text: "boty 2",
    },
    {
      id: "3. picture.jpg",
      src: require("../assets/homebarCarousel/3. picture.jpg"),
      text: "boty 3",
    },
  ];

  // const scroll = (value) => {
  //   refs.current[value].scrollIntoView({ behavior: "smooth" });
  //   console.log(value);
  //   setTimeout(() => {
  //     scroll((value + 1) % 3);
  //   }, 5000);
  // };

  // useEffect(() => {
  //   scroll(0);
  // }, []);

  // <div className="carousel">
  //   //   {elements.map((element, index) => {
  //     return (
  //       <CarouselElement
  //         src={element.src}
  //         refs={refs}
  //         index={index}
  //       ></CarouselElement>
  //     );
  //   })}
  // </div>

  return (
    <Carousel2 interval={4000}>
      {elements.map((element) => {
        return (
          <Carousel2.Item>
            <img
              className="carousel-element"
              src={element.src}
              alt="First slide"
            />
            <Carousel2.Caption>
              <p>{element.text}</p>
              <button className="carousel-button">TODO Button</button>
            </Carousel2.Caption>
          </Carousel2.Item>
        );
      })}
    </Carousel2>
  );
}

export default Carousel;
