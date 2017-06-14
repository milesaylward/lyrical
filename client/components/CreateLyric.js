import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import addLyrics from '../queries/addLyrics';

class CreateLyric extends Component {
  constructor(props){
    super(props);

    this.state ={content: ''};
  }

  submitLyrics(event){
    event.preventDefault();

    if(this.state.content === '') {
      alert('You must provide lyrics');
      return;
    }
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    })
    this.setState({ content: '' });
  }

  render(){
    return (
      <form id='add-lyric' onSubmit={this.submitLyrics.bind(this)}>
        <label className='add-label'>
          Add a Lyric
        </label>
        <input
          id='add-input'
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <button type='submit' id='lyric-submit' >
            Add Lyric
          </button>
      </form>
    )
  }
}

export default graphql(addLyrics)(CreateLyric);
