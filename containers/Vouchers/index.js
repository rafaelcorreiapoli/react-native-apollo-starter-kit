import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import VouchersList from '@components/VouchersList'
import waitLoading from '@hocs/waitLoading'

const query = gql`
query allVouchers {
  allVouchers {
    utilizado
    token
    restaurante {
      logoUrl
    }
    promocao {
      validaAte
      nome
    }
    utilizadoEm
    validadoEm
  }
}
`


export default graphql(query, {
  props: ({ data: { allVouchers, ...props }}) => ({
    ...props,
    rows: allVouchers,
  })
})(waitLoading(VouchersList))
