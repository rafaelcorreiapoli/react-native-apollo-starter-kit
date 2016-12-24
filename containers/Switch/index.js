import Switch from '@components/Switch'
import { connect } from 'react-redux'
import { readTokenFromStorage } from '@actions/login'
import { getToken, getWaitingStorageAnswer } from '@selectors/login'

const mapDispatchToProps = dispatch => ({
  readTokenFromStorage() {
    dispatch(readTokenFromStorage())
  }
})
const mapStateToProps = state => ({
  token: getToken(state),
  waitingStorageAnswer: getWaitingStorageAnswer(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Switch)
