import React, { Component } from "react";
import { Link } from "react-router-dom";

const artists = [
  {
    id: "83d91898-7763-47d7-b03b-b92132375c47",
    name: "Pink Floyd",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/98d2ca11cd6642519d750f4b82fbec2c.png"
  },
  {
    id: "8bfac288-ccc5-448d-9573-c33ea2aa5c30",
    name: "Red Hot Chili Peppers",
    imageUrl:
      "https://lastfm-img2.akamaized.net/i/u/300x300/ff9c5cb557a7489f8ef032b993638d18.png"
  }
];

export default class Home extends Component {
  render() {
    return (
      <ul>
        {artists.map(artist => (
          <li key={artist.key}>
            <Link to={`/artists/${artist.id}`} className="row">
                <img src={artist.imageUrl} alt="Smiley face" className="col-4"/>
                <h1 className="col-6">{artist.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
