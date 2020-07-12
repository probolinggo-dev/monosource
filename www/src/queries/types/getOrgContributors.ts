/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getOrgContributors
// ====================================================

export interface getOrgContributors_getOrgContributors {
  __typename: "GithubContributorModel";
  id: string;
  login: string;
  name: string;
  nodeId: string;
  avatarUrl: string;
  htmlUrl: string;
  contributions: number;
}

export interface getOrgContributors {
  getOrgContributors: getOrgContributors_getOrgContributors[];
}
