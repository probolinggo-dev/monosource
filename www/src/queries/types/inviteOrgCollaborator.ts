/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: inviteOrgCollaborator
// ====================================================

export interface inviteOrgCollaborator_inviteOrgCollaborator {
  __typename: "MembershipStatusModel";
  role: string;
  state: string;
}

export interface inviteOrgCollaborator {
  inviteOrgCollaborator: inviteOrgCollaborator_inviteOrgCollaborator;
}

export interface inviteOrgCollaboratorVariables {
  username: string;
}
