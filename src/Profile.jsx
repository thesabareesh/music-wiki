import React,{Component} from 'react';
import "./app.css";
import Gallery from "./Gallery";
class Profile extends Component{

  render(){
    let artist={name:'',followers:{total:''},images:[{url:''}]};
    artist=this.props.artist!==null ? this.props.artist : artist;

    return(
      <div className="profile">
        <img
          src={artist.images[0].url}
          alt="Profile"
          className="profile-img"
        />
        <div className="profile-info">
      <div className="profile-name">{artist.name}</div>
      <div className="profile-followers">
        {artist.followers.total} followers
      </div>
    </div>
    </div>
    )


  }

}

export default Profile;
