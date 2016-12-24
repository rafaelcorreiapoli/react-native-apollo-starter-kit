import Switch from '@components/Switch'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  user: false
})

export default connect(mapStateToProps)(Switch)
