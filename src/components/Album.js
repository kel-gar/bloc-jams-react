import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }

convertTime(time) {
  if (isNaN(time) === true || time === undefined ) {
    return '--:--';
  }
  var minutes = Math.floor(time / 60);
  var seconds = time - minutes * 60;
  minutes = minutes.toString();
   if (seconds < 10) {
    seconds = Math.floor(seconds.toString());
    return minutes + ":0" + seconds;
  } else {
    seconds = Math.floor(seconds.toString());
    return minutes + ":" + seconds;
  }
}

   render() {
     return (
       <section className="album">
         <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list" align="center">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>
           <tbody>
              <th>Track</th>
              <th>Title</th>
              <th>Time</th>
               {
                 this.state.album.songs.map(( song, index ) =>
                <tr className= "song" key={index}>
                  <td>{index + 1}</td>
                  <td>{song.title}</td>
                  <td>{this.convertTime(song.duration)}</td>
                </tr>
                  )
                }
           </tbody>
         </table>
       </section>
     );
   }
 }

 export default Album;
