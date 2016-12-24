import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import RestaurantesList from '@components/RestaurantesList'
import waitLoading from '@hocs/waitLoading'
import { connect } from 'react-redux'
import { clearTokenFromStorage } from '@actions/login'
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

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(clearTokenFromStorage())
  }
})

export default compose(
  graphql(query, {
    props: ({ data: { allRestaurantes, ...props }, ...otherProps}) => ({
      ...props,
      ...otherProps,
      rows: allRestaurantes,
    })
  }),
  connect(null, mapDispatchToProps)
)(waitLoading(RestaurantesList))
