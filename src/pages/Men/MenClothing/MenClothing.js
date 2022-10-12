import Product from "../../../components/Product";

function MenClothing() {
  return (
    <div className="products-wrapper">
      <header className="products-header">
        <button className="products-header-button">ponozky</button>
        <button className="products-header-button">tricka</button>
        <button className="products-header-button">rifle</button>
      </header>
      <div className="products-browser-wraper">
        <div className="products-filter-wrapper">filter</div>
        <div className="products-list-wrapper">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default MenClothing;
