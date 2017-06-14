import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongDetail from '../queries/fetchSongDetail';
import CreateLyric from './CreateLyric';
import LyricList from './LyricList';

class SongDetail extends Component{

  render(){
    const { song } = this.props.data
    if(!song) { return <div></div>}

    return(
      <div className='song-container'>
        <Link to='/'>
          <i className="material-icons back">arrow_back</i>
        </Link>
        <h4 className='song-detail-header'>{song.title}</h4>
        <LyricList lyrics={song.lyrics} songId={this.props.params.id} />
        <CreateLyric songId={this.props.params.id} />
      </div>
    )
  }
}

//pass id prop from react router to graphql so the correct song detail is shown
export default graphql(fetchSongDetail, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(SongDetail);
