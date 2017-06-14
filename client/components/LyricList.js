import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import deleteLyric from '../queries/deleteLyric';
import likeLyric from '../queries/likeLyric';
import fetchSongDetail from '../queries/fetchSongDetail'


const trashcan = 'http://res.cloudinary.com/milesaylward/image/upload/v1497468931/trashcan_darmol.png';

class LyricList extends Component {
  onLike(id, likes) {
    this.props.likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  onLyricDelete(id) {
    this.props.deleteLyric({
      variables: { id },
      refetchQueries: [{
        query: fetchSongDetail,
        variables: { id: this.props.songId }
      }],
    });
  }

  renderLyrics(){
    return this.props.lyrics.map(({ likes, content, id }) =>{
      return (
        <li key={id} className='lyric-item'>
          <p>{content}</p>
          <div className='vote-box'>
            <i className='material-icons' onClick={() => this.onLike(id, likes)}>thumb_up</i>
            <span className='like-count'>{likes}</span>
            <img src={trashcan} className='trashcan' onClick={ ()=> this.onLyricDelete(id)} />
          </div>

        </li>
      );
    });
  }
  render() {
    return (
      <ul className='lyric-container'>
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default compose(
  graphql(likeLyric, { name: 'likeLyric' }),
  graphql(deleteLyric, { name: 'deleteLyric' }),
)(LyricList);
