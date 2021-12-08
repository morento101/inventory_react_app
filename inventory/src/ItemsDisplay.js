function ItemsDispaly(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div>
            <p>Id: {props.items.indexOf(item) + 1}</p>
            <p>Name: {item.name}</p>
            <p>Type: {item.type}</p>
            <p>Price: {item.price}</p>
            <p>Brand: {item.brand}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsDispaly;
