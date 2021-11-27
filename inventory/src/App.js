import './App.css';
import SearchBar from './SearchBar';
import {useState} from 'react'

function App() {
  const [data, setData] = useState({});

  const updateData = (searchParams) => {
    setData(searchParams);
  }

  return (
    <div>
      <SearchBar callback={updateData}></SearchBar>
      <p>Name: {data['name'] ? data['name'] : 'No name to dispaly'}</p>
      <p>Price: {data['price'] ? data['price'] : 'No price to dispaly'}</p>
      <p>Type: {data['type'] ? data['type'] : 'No type to dispaly'}</p>
      <p>Brand: {data['brand'] ? data['brand'] : 'No name to dispaly'}</p>
    </div>
  );
}

export default App;
