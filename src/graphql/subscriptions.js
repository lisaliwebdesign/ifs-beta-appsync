// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateOrganisation = `subscription OnCreateOrganisation {
  onCreateOrganisation {
    id
    name
    type
  }
}
`;
export const onUpdateOrganisation = `subscription OnUpdateOrganisation {
  onUpdateOrganisation {
    id
    name
    type
  }
}
`;
export const onDeleteOrganisation = `subscription OnDeleteOrganisation {
  onDeleteOrganisation {
    id
    name
    type
  }
}
`;
export const onCreateCompetition = `subscription OnCreateCompetition {
  onCreateCompetition {
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
export const onUpdateCompetition = `subscription OnUpdateCompetition {
  onUpdateCompetition {
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
export const onDeleteCompetition = `subscription OnDeleteCompetition {
  onDeleteCompetition {
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
export const onCreateApplication = `subscription OnCreateApplication {
  onCreateApplication {
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
export const onUpdateApplication = `subscription OnUpdateApplication {
  onUpdateApplication {
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
export const onDeleteApplication = `subscription OnDeleteApplication {
  onDeleteApplication {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
    id
    title
    description
    display
    answer
    complete
  }
}
`;
