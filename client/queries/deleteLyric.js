import gql from 'graphql-tag';

export default gql`
  mutation deleteLyric($id: ID){
    deleteLyric(id: $id){
      id
    }
  }
`;
