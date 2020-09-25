import { gql } from '@apollo/client'

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      email
      firstName
      lastName
      phone
      role
    }
  }
`

const GET_USER_BY_ID = gql`
  query getUserById($id: Int!) {
    getUserById(id: $id) {
      id
      email
      firstName
      lastName
      phone
      role
    }
  }
`

export { GET_USERS, GET_USER_BY_ID }
