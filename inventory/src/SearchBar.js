import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  function SearchButtonPressed() {
    props.updateSearchParams({
      name: name,
      price: Number(price),
      type: type,
      brand: brand,
    });
  }

  return (
    <div>
      <div className="title">Search for an item</div>
      <form>
        <div className="search">
          <div className="form-group">
            <label htmlFor="name-filed">Name: </label>
            <input
              id="name-filed"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="price-filed">Max Price: </label>
            <input
              id="price-filed"
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="type-filed">Type: </label>
            <input
              id="type-filed"
              type="text"
              placeholder="Enter Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="brand-filed">Brand: </label>
            <input
              id="brand-filed"
              type="text"
              placeholder="Enter Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={SearchButtonPressed}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
