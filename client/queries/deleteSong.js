import gql from 'graphql-tag';

export default gql`
  mutation deleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`;
