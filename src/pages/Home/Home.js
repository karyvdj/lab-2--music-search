import React, { Component } from "react";
import { Link } from "react-router-dom";

import  SearchBar  from "../../components/SearchBar";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      search: false,
      artists: null,
      error: null
    };
  }
  handleSearch = query => {
    this.setState({
      search: true,
      error: null
    });

    fetch(`https://react-api-lab.herokuapp.com/search?query=${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          search: false,
          artists: data      
        });
      })
      .catch(error => {
        this.setState({
          search: true,
          error: error
        });
      });
  };

  render() {
    const { search, artists, error} = this.state;
    return (
      <React.Fragment>

        <SearchBar onSearch={this.handleSearch}/>
        {!search &&
          artists && (     
            <ul>
              {artists.data.map(artist => (
                <li key={artist.name}>
                  <Link to={`/artists/${artist.id}`} className="row">
                    <img src={artist.imageUrl} alt={artist.name} className="col-4"/>
                    <h1 className="col-6">{artist.name}</h1> 
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {search && <p>Search ...</p>}
          
          {error && <p>{error.message}</p>}  
      </React.Fragment>
      
    );
  }
}
