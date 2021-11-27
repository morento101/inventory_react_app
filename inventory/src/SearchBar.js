import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  function SearchButtonPressed () {
      props.callback({name: name, price: price, type: type, brand: brand});
  }

  return (
    <div>
      <div class="title">Search for an item</div>
      <form>
        <div class="form-group">
          <label htmlFor="name-filed">Name: </label>
          <input
            id="name-filed"
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="price-filed">Max Price: </label>
          <input
            id="price-filed"
            type="text"
            placeholder=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="type-filed">Type: </label>
          <input
            id="type-filed"
            type="text"
            placeholder=""
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
        </div>
        <div class="form-group">
          <label htmlFor="brand-filed">Brand: </label>
          <input
            id="brand-filed"
            type="text"
            placeholder=""
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          ></input>
        </div>
        <button type="button" onClick={SearchButtonPressed}>Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
