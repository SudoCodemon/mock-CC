import React from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage({ tracks, setNewTracks, searchText, setSearchText, setFilterList }) {

    
  return (
    <div>
      <Search searchText={searchText} setSearchText={setSearchText} tracks={tracks} setFilterList={setFilterList} />
      <AddTrackForm setNewTracks={setNewTracks} />
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage