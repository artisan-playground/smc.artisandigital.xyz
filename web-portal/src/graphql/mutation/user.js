import { gql } from '@apollo/client'

const CREATE_USER = gql`
  mutation createUser($data: UserInput) {
    createUser(data: $data) {
      token
    }
  }
`
