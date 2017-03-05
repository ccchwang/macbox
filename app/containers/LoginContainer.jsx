import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import LoginComponent from '../components/login'

export default connect(null, {login})(LoginComponent)
