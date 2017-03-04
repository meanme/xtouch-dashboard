import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Linking, ListView, Switch} from 'react-native'

class SmartHomeWidget extends Component {

	constructor(props) {
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const switches = [{
			key: 'sony',
			label: 'Sony TV',
			switch: true
		}, 
		// {
		// 	key: 'hue',
		// 	label: 'Philip Hue',
		// 	switch: false
		// }, 
		{
			key: 'lock',
			label: 'Smart Lock',
			switch: false
		}]
		this.state = {
		    dataSource: ds.cloneWithRows(switches),
			switches: {
				sony: true,
				hue: false,
				lock: false
			}
			
		}
	}
	

	toggleSwitch = (rowData, value) => {
		const newValues = Object.assign(this.state.switches, {})
		newValues[rowData.key] = value

		this.setState({switches: newValues})
	}

	render () {
		const props = this.props
		return (
			<View style={styles.smartHomeWrapper}>
                

				<ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
						<View style={styles.switchRow}>
							<Text style={styles.switchLabel}>{rowData.label}</Text>
							<View style={styles.switchInput}>
								<Switch
								onValueChange={this.toggleSwitch.bind(this, rowData)}
								style={{marginBottom: 10}}
								value={this.state.switches[rowData.key]} />
							</View>
							
						</View>
					)}
                />
			</View>
		)
	}
}

const styles = StyleSheet.create({

    smartHomeWrapper: {
        padding: 5,
        backgroundColor: '#000000',
        flexDirection: 'row'
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

export default SmartHomeWidget