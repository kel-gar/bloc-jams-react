import React, { Component } from 'react';
<<<<<<< HEAD
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);
=======

class Album extends Component {
   render() {
     return (
       <section className="album">
         {this.props.match.params.slug} Album will go here 
       </section>
     );
   }
 }
>>>>>>> bloc-jams-component-landing-NEW

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
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
       </section>
     );
   }
 }

 export default Album;
