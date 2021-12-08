import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice("");
    setType("");
    setBrand("");
  };

  return (
    <div>
      <div className="title">Add an item</div>
      <form>
        <div className="add">
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
            <label htmlFor="price-filed">Price: </label>
            <input
              id="price-filed"
              type="text"
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
          <button type="button" onClick={addItemButtonPressed}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
