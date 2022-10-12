import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import ProductsNavbarButton from "../../components/ProductsNavbarButton";

function Home(props) {
  const { links } = props;
  console.log(links);
  return (
    <div>
      <Carousel />

      <div className="products-navbar-wrapper">
        {links.map((element) => {
          return (
            <ProductsNavbarButton imgSrc={element.src} link={element.link}>
              {element.text}
            </ProductsNavbarButton>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
