import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from "./components/Body.js";
import Header from './components/Header.js';
import reportWebVitals from './reportWebVitals';

const AppLayout=()=>{
  const [grouping, setGrouping] = useState('Status');
  const [ordering, setOrdering] = useState('Priority');

  return (
    <div className="app">
      <Header 
        grouping={grouping} 
        setGrouping={setGrouping} 
        ordering={ordering} 
        setOrdering={setOrdering}
      />
      <Body 
        grouping={grouping} 
        ordering={ordering} 
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);


reportWebVitals();

