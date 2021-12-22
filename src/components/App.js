import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import Examples from './Example';

const API_ADDRESS = 'https://api.spotify.com/v1/artists/';

class App extends Component{ 
    state={ artist: null, tracks: [] };

    

    searchArtist = artistQuery => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
            .then(response => response.json())
            .then(json => {

                if (json.artists.total > 0) {
                    const artist = json.artists.items[0];
                    
                    this.setState({ artist });

                    fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                        .then(response => response.json())
                        .then(json => this.setState({ tracks: json.tracks }))
                        .catch(error => alert(error.message))
                }
            
            })
            .catch(error => alert(error.message));
    }

    
    render(){
        return (
            <div className="start">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>  
                <div className="top pb-3">
                    <h2 className="main-title">Artist Search</h2>
                    <h4>Search your favourite artist to get their top songs!</h4>
                </div>
                
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks}/>
                {/* <h5>Examples can be seen below:</h5> 
                <Examples/> */}
            </div>
        )
    }
}

export default App;

