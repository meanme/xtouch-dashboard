import { connect } from 'react-redux'

import ContactsSelector from '../components/ContactsSelector'
import * as actions from '../actions'


const mapStateToProps = (state) => ({
    contact: state.contactState.contact
})


export default connect(
	mapStateToProps,
	actions
)(ContactsSelector)