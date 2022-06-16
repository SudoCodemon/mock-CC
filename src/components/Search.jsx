import React, { useEffect } from 'react'

function Search({ searchText, setSearchText, tracks, setFilterList}) {

  function handleSearch(e) {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    let filteredTracks = tracks.filter((track) => {
      console.log(track)
      if(searchText.toLowerCase() === track.title.toLowerCase()) {
        return track
      }
    })
    setFilterList(filteredTracks)
  }, [searchText])

  return (
    <div className="search">
        <input
          value={searchText}
          type="text"
          placeholder="Search your Tracks"
          onChange={handleSearch}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search