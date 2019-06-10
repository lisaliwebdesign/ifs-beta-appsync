// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    password
    applications {
      items {
        id
        name
        Status
      }
      nextToken
    }
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    password
    applications {
      items {
        id
        name
        Status
      }
      nextToken
    }
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    email
    password
    applications {
      items {
        id
        name
        Status
      }
      nextToken
    }
  }
}
`;
export const createOrganisation = `mutation CreateOrganisation($input: CreateOrganisationInput!) {
  createOrganisation(input: $input) {
    id
    name
    type
  }
}
`;
export const updateOrganisation = `mutation UpdateOrganisation($input: UpdateOrganisationInput!) {
  updateOrganisation(input: $input) {
    id
    name
    type
  }
}
`;
export const deleteOrganisation = `mutation DeleteOrganisation($input: DeleteOrganisationInput!) {
  deleteOrganisation(input: $input) {
    id
    name
    type
  }
}
`;
export const createCompetition = `mutation CreateCompetition($input: CreateCompetitionInput!) {
  createCompetition(input: $input) {
    id
    createdAt
    description
    title
    fundingType
    projectSize
    openTime
    closeTime
    open
  }
}
`;
export const updateCompetition = `mutation UpdateCompetition($input: UpdateCompetitionInput!) {
  updateCompetition(input: $input) {
    id
    createdAt
    description
    title
    fundingType
    projectSize
    openTime
    closeTime
    open
  }
}
`;
export const deleteCompetition = `mutation DeleteCompetition($input: DeleteCompetitionInput!) {
  deleteCompetition(input: $input) {
    id
    createdAt
    description
    title
    fundingType
    projectSize
    openTime
    closeTime
    open
  }
}
`;
export const createApplication = `mutation CreateApplication($input: CreateApplicationInput!) {
  createApplication(input: $input) {
    id
    name
    user {
      id
      name
      email
      password
      applications {
        nextToken
      }
    }
    Status
    organisations {
      items {
        id
        name
        type
      }
      nextToken
    }
    competition {
      id
      createdAt
      description
      title
      fundingType
      projectSize
      openTime
      closeTime
      open
    }
    questions {
      items {
        id
        title
        description
        display
        answer
        complete
      }
      nextToken
    }
  }
}
`;
export const updateApplication = `mutation UpdateApplication($input: UpdateApplicationInput!) {
  updateApplication(input: $input) {
    id
    name
    user {
      id
      name
      email
      password
      applications {
        nextToken
      }
    }
    Status
    organisations {
      items {
        id
        name
        type
      }
      nextToken
    }
    competition {
      id
      createdAt
      description
      title
      fundingType
      projectSize
      openTime
      closeTime
      open
    }
    questions {
      items {
        id
        title
        description
        display
        answer
        complete
      }
      nextToken
    }
  }
}
`;
export const deleteApplication = `mutation DeleteApplication($input: DeleteApplicationInput!) {
  deleteApplication(input: $input) {
    id
    name
    user {
      id
      name
      email
      password
      applications {
        nextToken
      }
    }
    Status
    organisations {
      items {
        id
        name
        type
      }
      nextToken
    }
    competition {
      id
      createdAt
      description
      title
      fundingType
      projectSize
      openTime
      closeTime
      open
    }
    questions {
      items {
        id
        title
        description
        display
        answer
        complete
      }
      nextToken
    }
  }
}
`;
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
