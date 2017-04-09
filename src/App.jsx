import React,{Component} from 'react';
import './app.css';
import {FormGroup,FormControl,InputGroup,Glyphicon} from 'react-bootstrap';

class App extends Component{
  render(){
    return(
      <div className="app">
        <div className="app-title">Music Wiki</div>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="search"/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>
        <div className="profile">
          <div>Artist picture</div>
          <div>Artist name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
