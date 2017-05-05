import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchSongDetail from '../queries/fetchSongDetail';
import CreateLyric from './CreateLyric';
import LyricList from './LyricList';

class songDetail extends Component{
  render(){

    const { song } = this.props.data

    if(!song) { return <div></div>}

    return(
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <CreateLyric songId={this.props.params.id}/>
      </div>
    )
  }
}

//pass id prop from react router to graphql so the correct song detail is shown
export default graphql(fetchSongDetail, {
  options: (props) => { return { variables: { id: props.params.id }}}
})(songDetail);
