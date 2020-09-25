const { gql } = require('@apollo/client')

const GET_HISTORIES = gql`
  query {
    getHistories {
      id
      createdAt
      updatedAt
    }
  }
`

const GET_HISTORY_BY_ID = gql`
  query getHistoryById($id: Int!) {
    getHistoryById(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`

export { GET_HISTORIES, GET_HISTORY_BY_ID }
