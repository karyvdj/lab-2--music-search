import React, { Component } from "react";
import AlbumsList from "../../components/Albums";

class Artist extends Component {
  state = {
    loading: true,
    error: null, 
    artist: null
  };

  componentDidMount() {
    this.loadArtist();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
      this.loadArtist();
    }
  }

  loadArtist = () => {
    this.setState({
      loading: true,
      error: null
    });

    fetch(`https://react-api-lab.herokuapp.com/artists/${this.props.match.params.artistId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          artist: data      
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error
        });
      });
  };

  render() {
    const { loading, error, artist } = this.state;
    return (
        <div className="container">
            {loading && <p>Loading ...</p>}

            {!loading && artist && 
              <React.Fragment>
                  <div className="row">
                    <img src={artist.data.imageUrl} alt={artist.data.name} className="col-4"/>
                    <div className="col-6">
                      <h1>{artist.data.name}</h1>
                      <p>{artist.data.bio}</p>
                    </div> 
                  </div>
                  <div>
                    <h1>Albums:</h1>
                    <AlbumsList albums={artist.data.albums}/>
                  </div>
              </React.Fragment> 
            }

            {error && <p>{error.message}</p>}   
        </div>
    );
  }
}

export default Artist;