import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import RestaurantesList from '@components/RestaurantesList'
import waitLoading from '@hocs/waitLoading'

const query = gql`
query allRestaurantes {
  allRestaurantes {
    id
    nome
    backgroundUrl
    logoUrl
  }
}
`


export default graphql(query, {
  props: ({ data: { allRestaurantes, ...props }, ...otherProps}) => ({
    ...props,
    ...otherProps,
    rows: allRestaurantes,
  })
})(waitLoading(RestaurantesList))
