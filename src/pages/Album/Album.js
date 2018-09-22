import React, { Component } from "react";
import TracksList from "../../components/Albums/TracksList";

class Album extends Component {
  state = {
    loading: true,
    error: null, 
    album: null
  };

  componentDidMount() {
    this.loadAlbum();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.albumId !== prevProps.match.params.albumId) {
      this.loadAlbum();
    }
  }

  loadAlbum = () => {
    this.setState({
      loading: true,
      error: null
    });

    fetch(`https://react-api-lab.herokuapp.com/albums/${this.props.match.params.albumId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          album: data      
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
    const { loading, error, album } = this.state;
    return (
      <div>  
        {loading && <p>Loading ...</p>}

        {!loading && album && 
        <React.Fragment>
          <div className="row">
            <img src={album.data.imageUrl} alt={album.data.name} className="col-4"/>
            <h1 className="col-6">{album.data.name}</h1>
          </div>
          <div>
            <h1>Tracks:</h1>
            <TracksList tracks={album.data.tracks}/>
          </div>
        </React.Fragment>
        }

        {error && <p>{error.message}</p>}  

      </div>
    );
  }
}

export default Album;