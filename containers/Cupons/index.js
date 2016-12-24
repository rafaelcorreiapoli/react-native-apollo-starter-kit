import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import CuponsGrid from '@components/CuponsGrid'
import waitLoading from '@hocs/waitLoading'

const query = gql`
query allCupoms {
  allCupoms {
    id
    validoAte
    utilizado
    restaurante {
      nome
      logoUrl
    }
  }
}
`


export default graphql(query, {
  props: ({ data: { allCupoms, ...props }}) => ({
    ...props,
    rows: allCupoms,
  })
})(waitLoading(CuponsGrid))
