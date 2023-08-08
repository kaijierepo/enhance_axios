import React, { useState } from 'react';
import './App.css';
import { Item } from './item';
import Store from './store';  

function App() {

  const [items, setItems] = useState([{name: 'wkj', age: 34, gender: 'male'}]);

  return (
    <div className="App">
      {
         items.map((item, index) => (
          <Item user={item} ></Item>
         ))
      }  
    </div>
  );
}

export default App;
