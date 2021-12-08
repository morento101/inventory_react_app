import './App.css';
import SearchBar from './SearchBar';
import {useState} from 'react'
import AddItem from './AddItem'; 
import ItemsDispaly from './ItemsDisplay';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []})

  const updateData = (searchParams) => {
    setFilters(searchParams);
  }

  const AddItemToData = (item) => {
    let currentItems = data['items'];
    currentItems.push(item);
    setData({items: currentItems});
    console.log(data)
  }

  return (
    <div>
      <SearchBar updateSearchParams={updateData} />
      <ItemsDispaly items={data['items']}/>
      <AddItem addItem={AddItemToData} />
    </div>
  );
}

export default App;
