import React,{Component} from 'react';
import './app.css';
import {FormGroup,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';
import Profile from "./Profile";
import Gallery from "./Gallery";

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      query:'',
      artist:null,
      tracks:[]
    }
  }
  search(){
    console.log("search",this.state.query);
    const BASE_URL="https://api.spotify.com/v1/search?";
    let FETCH_URL=`${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL="https://api.spotify.com/v1/artists/";

    console.log("FETCH_URL",FETCH_URL);

    fetch(FETCH_URL,{method:'GET'})
    .then(response=>response.json())
    .then(json=>{
      const artist = json.artists.items[0];
      this.setState({artist});

      FETCH_URL=`${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
      fetch(FETCH_URL,{method:'GET'})
      .then(response => response.json())
      .then(json => {
        const tracks=json.tracks;
        this.setState({tracks});
      })

    })

  }
  render(){
    return(
      <div className="app">
        <div className="app-title">Music Wiki</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.query}
              placeholder="Search for an artist..."
              onChange={event => {this.setState({query : event.target.value})}}
              onKeyPress={event=>{
                if(event.key === "Enter"){
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist!=null?
          <div>
            <Profile artist={this.state.artist}/>
            <Gallery tracks={this.state.tracks}/>
          </div>:
        <div>
      </div>
        }


      </div>
    )
  }
}

export default App;
