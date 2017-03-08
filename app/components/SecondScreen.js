import React, {PropTypes, Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, ListView, Switch} from 'react-native'

import Slider from 'react-native-slider'
import MainContents from './MainContents'
import NavButton from './NavButton'
import LauncherList from './LauncherList'
import ContactsSelector from './ContactsSelector'
import SmartHomeWidget from './SmartHomeWidget'
import RemindersContainer from '../containers/RemindersContainer'
import QuickActionsContainer from '../containers/QuickActionsContainer'

import LinearGradient from 'react-native-linear-gradient'

class SecondScreen extends Component {

	constructor(props) {
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const switches = [{
			key: 'bedroom1',
			label: 'Bedroom 1',
			switch: true
		}, 
		{
			key: 'bedroom2',
			label: 'Bedroom 2',
			switch: false
		},
		{
			key: 'kitchen',
			label: 'Kitchen',
			switch: false
		},
		{
			key: 'livingRoom1',
			label: 'Living Room Lamp',
			switch: true
		},
		{
			key: 'couch',
			label: 'Couch',
			switch: true
		}
		]

		this.state = {
			dayLightCycle: true,
			bedroom1: true,
			bedroom2: true,
			livingRoomLamp: true,
			livingRoomSofa: false,
			kitchen: false,
			
			dataSource: ds.cloneWithRows(switches),
			switches: {
				sony: true,
				hue: false,
				lock: false
			}
		}

		
	}

	toggleSwitch = () => {

	}

	render () {
		const props = this.props;
		return (
			<View style={styles.container}>

				<View style={styles.navBar}>
					<LauncherList />
				</View>

				<View style={styles.mainContent}>

					<View style={styles.mainContentSection}>

						<View style={[styles.switchRow, {marginTop: 10, borderBottomWidth: 0}]}>
							<Text style={styles.labelText}>Day Light Cycle</Text>
							<Switch
								onValueChange={this.toggleSwitch}
								style={{marginBottom: 10}}
								value={this.state.dayLightCycle} />
						</View>

						<View style={styles.hueControl}>
							<Image style={{borderRadius: 200, height: 200, width: 200,  borderWidth: 2, borderColor: '#FFFFFF'}}
								source={require('./../images/hue.png')} />
						</View>

						<View style={styles.sliderWrapper}>
							<Image style={{height: 30, width: 30}}
								source={require('./../images/light-off.png')} />
							<Slider
							value={0.4}
								style={{flex: 1, marginLeft: 10, marginRight: 10}}
								trackStyle={customStyles3.track}
								thumbStyle={customStyles3.thumb}
								minimumTrackTintColor='#eecba8'
							/>
							<Image style={{height: 30, width: 30}}
								source={require('./../images/light-on.png')} />
						</View>
						 
					</View>

					<View style={styles.mainContentSection}>
						<ListView
							dataSource={this.state.dataSource}
							renderRow={(rowData) => (
								<View style={styles.switchRow}>
									<Text style={styles.switchLabel}>{rowData.label}</Text>
									<View style={styles.switchInput}>
										<Switch
										onValueChange={this.toggleSwitch.bind(this, rowData)}
										style={{marginBottom: 10}}
										value={rowData.switch} />
									</View>
									
								</View>
							)}
						/>
					</View>
					

					
				</View>
			</View>
		)
		
	}
}

const customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  }
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#000000'
	},

	backgroundImageWrapper: {
		flex: 1,
		position: 'absolute',
        top: 0, 
		bottom: 0, 
		left: 0, 
		right: 0
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
		backgroundColor: 'rgba(0,0,0, 0.5)'
	},


	labelText: {
		flexGrow: 1,
		textAlign: 'left',
		color: '#FFFFFF',
		paddingBottom: 10
	},

	hueControl: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	sliderWrapper: {
		flexDirection: 'row',
		flexBasis: 30,
		marginBottom: 10
	},

	hueGradient: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		flex: 1,
		width: 200,
		height: 200
	},
	switchRow: {
		borderBottomWidth: 1,
		borderBottomColor: '#333333',
		flexDirection: 'row',
		alignItems: 'center'
	},
	switchLabel: {
		flexGrow: 1,
		color: '#FFFFFF',
		paddingLeft: 5
	},
	switchInput: {
		paddingTop: 4,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default SecondScreen