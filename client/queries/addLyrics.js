import gql from 'graphql-tag';

export default gql`
  mutation addLyrics($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics{
        id
        content
        likes
      }
    }
  }

`;
