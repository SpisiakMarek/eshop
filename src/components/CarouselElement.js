import { Link, Outlet } from "react-router-dom";

function CarouselElement(props) {
  const { src } = props;
  const { id } = props;
  const { refs } = props;
  const { index } = props;
  return (
    <img
      className="carousel-element"
      src={src}
      id={id}
      ref={(ref) => (refs.current[index] = ref)}
    />
  );
}

export default CarouselElement;
