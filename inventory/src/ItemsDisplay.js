import { useRef, useEffect } from 'react'

function ItemsDispaly({ items, deleteItem }) {

  const divRef = useRef(null);

  useEffect(() => {
    return divRef.current.scrollIntoView({ behavior: 'smooth' });
  });


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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>
                  <div className="button">
                    <button type="button" onClick={() => deleteItem(item)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
          <div ref={divRef} />
        </tbody>
      </table>
    </div>
  );
}

export default ItemsDispaly;
