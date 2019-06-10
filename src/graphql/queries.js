// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
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
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      password
      applications {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getOrganisation = `query GetOrganisation($id: ID!) {
  getOrganisation(id: $id) {
    id
    name
    type
  }
}
`;
export const listOrganisations = `query ListOrganisations(
  $filter: ModelOrganisationFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
    }
    nextToken
  }
}
`;
export const getCompetition = `query GetCompetition($id: ID!) {
  getCompetition(id: $id) {
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
export const listCompetitions = `query ListCompetitions{
  listCompetitions {
    items {
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
    nextToken
  }
}
`;
export const getApplication = `query GetApplication($id: ID!) {
  getApplication(id: $id) {
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
export const listApplications = `query ListApplications(
  $filter: ModelApplicationFilterInput
  $limit: Int
  $nextToken: String
) {
  listApplications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      user {
        id
        name
        email
        password
      }
      Status
      organisations {
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
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
`;
