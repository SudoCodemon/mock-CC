import React, { useState, useEffect} from "react";
import TracksPage from './TracksPage'
import '../App.css';
import vinyl from '../assets/vinyl_PNG88.png';

function App() {

const [tracks, setTracks] = useState([])
const [newTracks, setNewTracks] = useState([])
const [searchText, setSearchText] = useState("")
const [filterList, setFilterList] = useState({})

useEffect(() => {
  if(filterList.length > 0) {
    setTracks(filterList)
  } else {
    fetch("http://localhost:8001/tracks")
  .then(res => res.json())
  .then(data => setTracks(data))
  }}, [newTracks, filterList])



  return (
    <div>
      <div className="header">
        <img src={vinyl} alt="vinyl record" />
        <h1>Flatiron Deep Cuts</h1>
      </div>
      <TracksPage tracks={tracks} setNewTracks={setNewTracks} searchText={searchText} setSearchText={setSearchText} setFilterList={setFilterList}/>
    </div>
  );
}

export default App;
