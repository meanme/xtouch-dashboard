import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import MainContents from './MainContents'
import NavButton from './NavButton'

class FirstScreen extends Component {
	render () {
		const props = this.props;
		return (
			<View style={styles.container}>


				<View style={styles.navBar}>
					<Text>Button</Text>
				</View>

				<View style={styles.mainContent}>
					<MainContents />
				</View>
				{/*<Text style={styles.title}>First Screen</Text>*/}

				{/*<NavButton destLabel="Second" buttonHandler={props.onButtonPress} />*/}
			</View>
		)
		
	}
}

/*const FirstScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>First Screen</Text>

			<NavButton destLabel="Second" buttonHandler={props.onButtonPress} />
		</View>
	)
}*/

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#2F9CB2'
		
	},

	navBar: {
		flexGrow: 1,
		backgroundColor: '#F4DC3D',
		justifyContent: 'center',
		alignItems: 'center'
	},

	mainContent: {
		flexGrow: 5,
		backgroundColor: '#CC3FF2'
	},
	title: {
		
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	}
})

export default FirstScreen