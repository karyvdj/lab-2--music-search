import React, { Component } from "react";

class TracksList extends Component {
  render() {
      const { tracks } = this.props
    return (
      <ol>
          {tracks.map(track => (
                <li key={track.name} >
                    <h2>{track.name}</h2>  
                    <p>{track.durationInSeconds}s</p>
                </li>
            ))}
      </ol>
    );
  }
}

export default TracksList;