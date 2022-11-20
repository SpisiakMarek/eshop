import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import ProductsNavbarButton from "../../components/ProductsNavbarButton";

function Home(props) {
  const { links } = props;
  return (
    <div>
      <Carousel />

      <div className="products-navbar-wrapper">
        {links.map((element, index) => {
          return (
            <ProductsNavbarButton
              imgSrc={element.src}
              link={element.link}
              key={index}
            >
              {element.text}
            </ProductsNavbarButton>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
