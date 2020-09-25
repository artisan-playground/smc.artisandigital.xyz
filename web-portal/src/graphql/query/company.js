const GET_COMPANIES = gql`
  query getCompanies {
    getCompanies {
      id
      companyName
    }
  }
`

const GET_COMPANY_BY_ID = gql`
  query getCompanyById($id: Int!) {
    getCompanyById(id: $id) {
      id
      companyName
    }
  }
`

export { GET_COMPANIES }
