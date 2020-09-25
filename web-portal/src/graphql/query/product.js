const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      id
      productName
      quantity
    }
  }
`

const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: Int!) {
    getProductById(id: $id) {
      id
      productName
      quantity
    }
  }
`

export { GET_PRODUCTS, GET_PRODUCT_BY_ID }
