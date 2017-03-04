import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Linking} from 'react-native'

import ActionIcon from './ActionIcon'

class QuickAction extends Component {

    handleClick = () => {
        const url = 'tel:9876543210'
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url)
            } else {
                alert('Don\'t know how to open URI: ' + url)
            }
        })
    }

	render () {
		const props = this.props
		return (
			<View style={styles.reminderWrapper}>

                <View style={styles.imageWrapper}>
                    <Image style={styles.reminderImage} source={{uri: props.image}} />
                </View>
                <View style={styles.reminderDescriptionWrapper}>

                    <Text style={styles.reminderDescription}>
                        <Text style={styles.reminderVerb}>{props.action} </Text>
                        <Text>{ props.description }</Text>
                    </Text>
                        
                </View>
                
			</View>
		)
	}
}

const styles = StyleSheet.create({

    reminderWrapper: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
		alignItems: 'flex-start',
        marginBottom: 5,
    },
    imageWrapper: {
        flexDirection: 'row',
        flexBasis: 40,
    },
    reminderImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginRight: 10
    },
    reminderDescriptionWrapper: {
        flex: 1,
        alignItems: 'flex-start'
    },

    actionTarget: {
        fontSize: 10,
        color: '#CCCCCC',
        marginLeft: 5
    },
    reminderVerb: {
        color: '#2D9FC8'
    },
    reminderDescription: {
        color: '#FFFFFF'
    },
    actionTimestamp: {
        fontSize: 10,
        color: '#CCCCCC',
    }
})



export default QuickAction
