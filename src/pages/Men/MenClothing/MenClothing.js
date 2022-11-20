import Product from "../../../components/Product";
import { useEffect, useState } from "react";
import { db } from "./../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function MenClothing() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "menClothing");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="products-wrapper">
      <header className="products-header">
        <button className="products-header-button">ponozky</button>
        <button className="products-header-button">tricka</button>
        <button className="products-header-button">rifle</button>
      </header>
      <div className="products-browser-wraper">
        <div className="products-filter-wrapper">
          <b>SizeTops</b>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>M</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>L</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XL</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>S</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XXL</p>
            </li>
          </ul>
          <b>SizeBottoms</b>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>M</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>L</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XL</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>S</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XXL</p>
            </li>
          </ul>
          <b>SizeTrunks</b>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>M</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>L</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XL</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>S</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>XXL</p>
            </li>
          </ul>
          <b>Brands</b>
          <ul className="filter-list">
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>Nike</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>Jordan</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>Vans</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>Converse</p>
            </li>
            <li className="filter-item">
              <input type="checkbox"></input>
              <p>Calvin Klein</p>
            </li>
          </ul>
        </div>
        <div className="products-list-wrapper">
          {products.map((data) => {
            return <Product data={data}></Product>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MenClothing;
