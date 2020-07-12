import { gql } from 'apollo-boost';

export const getOrgContributorsQuery = gql`
  query getOrgContributors {
    getOrgContributors {
      id
      login
      name
      nodeId
      avatarUrl
      htmlUrl
      contributions
    }
  }
`;
