import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class MainContents extends Component {
	render () {
		const props = this.props;
		return (
			<View style={styles.contents}>
                <Text>Contents</Text>
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	contents: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'red'
	}
})



export default MainContents
