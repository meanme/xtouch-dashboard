import { connect } from 'react-redux'

import LauncherApp from '../components/LauncherApp'
import * as actions from '../actions'


const mapStateToProps = (state) => {
	return {	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Second'))
		}
	}
}

export default connect(
	mapStateToProps,
	actions
)(LauncherApp)