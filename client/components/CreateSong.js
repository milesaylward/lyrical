import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

import fetchSongs from '../queries/fetchSongs';
import addSong from '../queries/addSong';

class CreateSong extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  onSubmit(event) {
    event.preventDefault();
    const { title } = this.state;

    if(title === '') {
      alert('You must provide a song title');
      return;
    }

    //titleCase all the song title's because I like to be OCD sometimes
    let titleCase =  title.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');

    this.props.mutate({
      variables: { title: titleCase },
      refetchQueries: [{ query: fetchSongs }]
    }).then(()=> hashHistory.push('/'))
  }


  render() {
    return (
      <div className='song-container'>
        <Link to='/'>
          <i className="material-icons back">arrow_back</i>
        </Link>
        <h4 className='song-header'>Create a New Song</h4>
        <form id='add-lyric' onSubmit={this.onSubmit.bind(this)}>
          <label className='add-label'>
            Add song title!
          </label>
          <input
            id='add-input'
            className='song-title-input'
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
          <button type='submit' id='lyric-submit' >
              Add Song
          </button>
        </form>
      </div>
    );
  }
};

export default graphql(addSong)(CreateSong);
