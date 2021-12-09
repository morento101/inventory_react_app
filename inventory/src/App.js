import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDispaly from "./ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateData = (searchParams) => {
    setFilters(searchParams);
  };

  const AddItemToData = (item) => {
    let currentItems = data["items"];
    currentItems.push(item);
    setData({ items: currentItems });
  };

  const filterData = (data) => {
    const filteredData = [];

    for (const item of data) {

      if (!filters.name && !filters.price && !filters.type && !filters.brand) {
        return data;
      }

      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }

      else if (Number(filters.price) !== 0 && Number(item.price) > Number(filters.price)) {
        continue
      }

      else if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }

      else if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }

      filteredData.push(item)
    }

    return filteredData;
  };

  return (
    <div>
      <SearchBar updateSearchParams={updateData} />
      <ItemsDispaly items={filterData(data["items"])} />
      <AddItem addItem={AddItemToData} />
    </div>
  );
}

export default App;
