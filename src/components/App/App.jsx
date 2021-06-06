import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {
  
  const [galleryList, setGalleryList] = useState([]);

  // on load, get gallery list
  useEffect(() => {
    getGalleryList()
  }, [])
  
  const getGalleryList = () => {
    console.log('get gallery list')
    //Get request to server
    axios.get('/gallery').then(response => {
      // save the data in the gallery list
      setGalleryList(response.data)
      console.log('get response data', response.data);
    }).catch(err => {
      console.log('error getting gallery list', err);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Ben's Gallery</h1>
        </header>
        <main>
          <GalleryForm getGalleryList={getGalleryList} />
          <GalleryList list={galleryList} getGalleryList={getGalleryList} />
        </main>
      </div>
    );
}

export default App;
