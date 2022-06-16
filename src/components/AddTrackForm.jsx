import React, { useState } from 'react'

function AddTrackForm({ setNewTracks }) {

const [newTrack, setNewTrack] = useState({
image:"",
title:"",
artist:"",
BPM:"",
})

function handleChange(e) {
  setNewTrack({...newTrack, [e.target.name]: e.target.value})
}

function handleSubmit(e) {
  e.preventDefault()
  fetch("http://localhost:8001/tracks", {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTrack)
  })
  .then(res => res.json())
  .then(data => setNewTracks(data))
}

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={newTrack.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={newTrack.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={newTrack.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={newTrack.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm