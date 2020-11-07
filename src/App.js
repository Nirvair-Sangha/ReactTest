import React from 'react';
import logo from './logo.svg';
import './App.css';
import OurButton from './OurButton'//./ is from this directory
import TryingLifecycle from './TryingLifecycle'
import AddNumbers from './AddNumbers/AddNumbers.js'
import Tools from './Tools';
import PictureTools from './PictureTools'

function App() {
  if(1 == 1){
  return (
    <div className="App">
      <header className="App-header">
        <AddNumbers/>
        <OurButton/>
        <Tools/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Fast
        </a>
      </header>
    </div>
  );
  }else{
    return(
      <h1> 1 does not equal 1</h1>
    )
  }
}

export default App;
