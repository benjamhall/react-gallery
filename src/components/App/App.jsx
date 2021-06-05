import React from 'react';
import './App.css';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ben's Gallery</h1>
        </header>
        <p>Gallery</p>
        <img src="images/goat_small.jpg" className="App-image"/>
        <img src="images/crawfish.jpg" className="App-image"/>
        <img src="images/bike.jpg" className="App-image"/>

      </div>
    );
}

export default App;
