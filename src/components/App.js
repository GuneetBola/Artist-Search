import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import Examples from './Example';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

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
            <div>
                <h2>Artist Searcher</h2>
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.tracks}/>
                <hr />
                <h4>Search your favourite artist to get their top songs!</h4>
                <h5>Examples can be seen below:</h5>
                <Examples/>
            </div>
        )
    }
}

export default App;

