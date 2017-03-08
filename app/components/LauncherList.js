import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, ListView} from 'react-native'

import LauncherApp from './../containers/LauncherAppContainer'
import Apps from '../constants/apps'

class LauncherList extends Component {

    constructor(props) {
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

//http://www.grokkingandroid.com/intents-of-androids-calendar-app/
        const navElements = [{
            id: 1,
            label: 'Home',
            nav: 'First'
        }, {
            id: 2,
            label: 'Light',
            nav: 'Second'
        }, {
            id: 3,
            label: 'Calendar',
            uri: 'market://details?id=com.google.android.calendar'
        }, {
            id: 4,
            label: 'Contacts',
            uri: 'skype://'
        },  {
            id: 5,
            label: 'Draw',
            nav: 'Third'
        },]
		this.state = {
		    dataSource: ds.cloneWithRows(navElements)
		}
	}
    
	render () {
		const props = this.props;
		return (
			<View style={styles.listWrapper} >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (<LauncherApp {...rowData}/>)}
                />
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	listWrapper: {
        flex: 1,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
	}
})



export default LauncherList
