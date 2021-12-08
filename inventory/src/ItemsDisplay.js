function ItemsDispaly(props) {
  return (
    <div>
      <div className="title">List of Items</div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => {
            return (
              <tr>
                <td>{props.items.indexOf(item) + 1}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsDispaly;
