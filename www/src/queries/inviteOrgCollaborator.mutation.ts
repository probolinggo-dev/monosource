import { gql } from 'apollo-boost';

export const inviteOrgCollaboratorMutation = gql`
  mutation inviteOrgCollaborator($username: String!) {
    inviteOrgCollaborator(username: $username) {
      role
      state
    }
  }
`;
