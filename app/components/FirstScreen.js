import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

import MainContents from './MainContents'
import NavButton from './NavButton'
import LauncherList from './LauncherList'
import ContactsSelector from './ContactsSelector'
import WeatherWidget from './WeatherWidget'

class FirstScreen extends Component {

	render () {
		const { width, height} = Dimensions.get('window')
		const props = this.props;
		return (
			<View style={styles.container}>

				<View style={styles.navBar}>
					{/*<Text>Button</Text>*/}
					<LauncherList />
				</View>

				<View style={styles.mainContent}>
					
					{/*<View style={styles.mainContentsWrapper}>
						{/*<View style={styles.backgroundImageWrapper}>*/}
						
							{/*<Image
								style={[styles.backgroundImage, {width: width - 75, height: height}]}
								source={require('./../images/background2.png')}
							/>*/}
						{/*</View>*/}
						{/*<MainContents />*/}
					{/*</View>*/}
					<Image
						style={[styles.backgroundImage, {width: width - 75, height: height}]}
						source={require('./../images/background3.png')}
					/>

					
					<View style={styles.mainContentSection}>
						<WeatherWidget />
					</View>

					<View style={styles.mainContentSection}>
						<Text>Here</Text>
					</View>

					{/*<View style={styles.contactsWrapper}>
						<ContactsSelector />
					</View>*/}
					
				</View>
				{/*<Text style={styles.title}>First Screen</Text>*/}
				{/*<NavButton destLabel="Second" buttonHandler={props.onButtonPress} />*/}
			</View>
		)
		
	}
}

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row'
	},

	backgroundImageWrapper: {
		flex: 1,
		position: 'absolute',
        top: 0, 
		bottom: 0, 
		left: 0, 
		right: 0
	},


	backgroundImage: {
		position: 'absolute',
		flex: 1,
        alignSelf: 'stretch',
        resizeMode: 'cover'
	},

	navBar: {
		flexBasis: 75,
		backgroundColor: '#F4DC3D',
		justifyContent: 'center',
		alignItems: 'center'
	},

	mainContent: {
		flex: 1,
		flexDirection: 'row'
	},

	mainContentSection: {
		margin: 10,
		flex: 1,
		// backgroundColor: 'pink'
		backgroundColor: 'rgba(0,0,0, 0.5)'
	},

	mainContentsWrapper: {
		flex: 1
	},

	contactsWrapper: {
		flexGrow: 2
	}
	// title: {
		
	// 	fontSize: 24,
	// 	fontWeight: '500',
	// 	color: '#ffffff',
	// 	marginBottom: 30
	// }
})

export default FirstScreen