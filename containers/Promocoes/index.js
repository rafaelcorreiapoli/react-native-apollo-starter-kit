import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PromocoesList from '@components/PromocoesList'
import waitLoading from '@hocs/waitLoading'

const query = gql`
query allPromocoes {
  allPromocaos {
    id
    nome
    imagemUrl
    restaurante {
      nome
      backgroundUrl
    }
  }
}
`


export default graphql(query, {
  props: ({ data: { allPromocaos, ...props } }) => ({
    ...props,
    rows: allPromocaos,
  })
})(waitLoading(PromocoesList))
