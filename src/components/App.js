import React, {Component} from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import Examples from './Example';

const API_ADDRESS = 'https://api.spotify.com/v1/artists/';

class App extends Component{ 
    state={ artist: null, tracks: [] };

    

search() {
        console.log('this.state', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
        let accessToken = 'YOUR ACCESS TOKEN'

        var myOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            mode: 'cors',
            cache: 'default'
        };

        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => {
                const artist = json.artists.items[0];
                this.setState({ artist });

                FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
                fetch(FETCH_URL, myOptions)
                .then(response => response.json())
                .then(json => {
                    const { tracks } = json;
                    this.setState({ tracks });
                })
            })
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

