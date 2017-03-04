import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, ListView} from 'react-native'

import LauncherApp from './LauncherApp'
import Apps from '../constants/apps'

class LauncherList extends Component {

    constructor(props) {
		super(props)

		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const elements = []
        for(let i = 0; i < 5; i++) {


            elements.push(`row_${i}`)
        }
		this.state = {
		    dataSource: ds.cloneWithRows(elements)
		}
	}
    
	render () {
		const props = this.props;
		return (
			<View style={styles.listWrapper} >
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (<LauncherApp/>)}
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
