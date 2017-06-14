import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { trashcan, border } from './Images';

import fetchSongs from '../queries/fetchSongs';
import deleteSong from '../queries/deleteSong';

class SongList extends Component {
  onSongDelete(id){
    this.props.mutate({
      variables: { id },
      refetchQueries: [{ query: fetchSongs }]
    })
  }

  renderSongs(){
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li key={id} className='song-item'>
          <Link to={`song/${id}`} className='song-title'>{title}</Link>
          <div className='button-container'>
            <Link to={`song/${id}`} className='song-title'>
              <i className='material-icons add'>add</i>
            </Link>
            <img src={trashcan} className='trashcan' onClick={ ()=> this.onSongDelete(id)} />
          </div>
        </li>
      );
    });
  }
  render() {
    if(this.props.data.loading) {return <div>Loading...</div>}
    return (
      <div className="home-container">
        <div className='song-container'>
          <Link to='songs/new'>
            <div className='song-item add-new'>
              Add New Song
              <i className='material-icons'>add</i>
            </div>
          </Link>
        </div>
        <div className='midLine'></div>
        <ul className='song-container'>
          {this.renderSongs()}
        </ul>
      </div>
    );
  }
}

export default graphql(deleteSong)(
   graphql(fetchSongs)(SongList)
 );
