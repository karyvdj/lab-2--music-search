import React, { Component } from "react";
import { Link } from "react-router-dom";

class AlbumsList extends Component {
  render() {
      const { albums } = this.props
    return (
      <ul>
          {albums.map(album => (
                <li key={album.id} >
                    <Link to={`/albums/${album.id}`} className="row">
                        <img src={album.imageUrl} alt={album.name} className="col-4"/>
                        <h2 className="col-6">{album.name}</h2>  
                    </Link>
                </li>
            ))} }
      </ul>
    );
  }
}

export default AlbumsList;