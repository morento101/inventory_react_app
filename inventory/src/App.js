import "./App.css";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import ItemsDispaly from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({items: data}));
  }, []);

  const updateData = (searchParams) => {
    setFilters(searchParams);
  };

  const AddItemToData = (item) => {
    let currentItems = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        currentItems.push(data);
        setData({ items: currentItems });
      });
  };

  const deleteItem = (item) => {
    const items = data['items'];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items});
        };
      }
    );
  };

  const filterData = (data) => {
    const filteredData = [];

    for (const item of data) {
      if (!filters.name && !filters.price && !filters.type && !filters.brand) {
        return data;
      }

      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      } else if (
        Number(filters.price) !== 0 &&
        Number(item.price) > Number(filters.price)
      ) {
        continue;
      } else if (filters.type !== "" && item.type !== filters.type) {
        continue;
      } else if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div>
      <SearchBar updateSearchParams={updateData} />
      <ItemsDispaly deleteItem={deleteItem} items={filterData(data["items"])} />
      <AddItem addItem={AddItemToData} />
    </div>
  );
}

export default App;
