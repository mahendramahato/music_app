import React, { useState, useEffect } from 'react';
import { getAllSongs } from './api';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';

const App = () => {

  const [queryword, setQueryword] = useState('')
  const [song, setSong] = useState([])

  const handleSubmit= (e) =>{
      e.preventDefault()

      // console.log(queryword)
  
      getAllSongs(queryword).then((data) => {
        console.log(data)
        setSong(data)
        
      }).catch(error =>{
        console.log(error)
      })  
    }

  
    return (
      <>
      <Header />

      <div className="container-fluid">
  
        <div className="row text-center" style={{marginTop: "6%", marginBottom: 23}}>
          <div className="container">
              <img className="cd" src="./images/cd.png" alt="cd"></img>
          </div>
        </div>
        
        <div className="row">
          <div className="container" style={{marginBottom: '0%', width: '50%'}}>
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" className="searchTerm" onChange={(e) => setQueryword(e.target.value)}
                placeholder="Search for Artist, Song, Albums"/>
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
            </form>
          </div>
        </div>


        <List song={song}/>


      </div>

      <Footer />
      </>
    );
}

export default App;
