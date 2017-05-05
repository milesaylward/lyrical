import gql from 'graphql-tag';

export default gql`
  mutation addSong($title: String){
    addSong(title: $title ){
      title
    }
  }
`;
