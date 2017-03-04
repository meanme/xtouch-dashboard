import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native'
import ActionIcon from './ActionIcon'

class QuickAction extends Component {

    handleClick = () => {
        const url = 'tel:9876543210'

        // Get the link
        const uri = this.props.link

        if (uri && uri != '') {

            Linking.canOpenURL(url).then(supported => {
                if (supported) {
                    Linking.openURL(uri)
                } else {
                    alert('Don\'t know how to open URI: ' + uri)
                }
            })
        }
        
    }



	render () {
		const props = this.props
		return (
                <TouchableOpacity activeOpacity={0.6} onPress={this.handleClick} style={styles.quickActionWrapper}>

                <View style={styles.imageWrapper}>

                    {/*<Image style={styles.actionImage} source={require('./../images/weather/sun.png')} />*/}
                    <Image style={styles.actionImage} source={{uri: props.image}} />
                </View>
                <View style={styles.actionDescriptionWrapper}>
                    <View style={styles.actionHeader}>
                        <ActionIcon type={props.type} />
                        <Text style={styles.actionTarget}>
                            { props.target }
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.actionDescription}>
                            <Text style={styles.actionVerb}>{props.action} </Text>
                            <Text>{ props.description }</Text>
                            
                        </Text>
                        <Text style={styles.actionTimestamp}>{ props.ts }</Text>
                    </View>
                        
                </View>
                </TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({

    quickActionWrapper: {
        padding: 5,
        flex: 1,
        flexDirection: 'row',
		alignItems: 'flex-start',
        marginBottom: 10,
    },
    imageWrapper: {
        flexDirection: 'row',
        flexBasis: 60,
    },
    actionImage: {
        
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        marginRight: 10
    },
    actionDescriptionWrapper: {
        flex: 1,
        alignItems: 'flex-start'
    },

    actionHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    actionTarget: {
        fontSize: 10,
        color: '#CCCCCC',
        marginLeft: 5
    },
    actionVerb: {
        color: '#9E4637'
    },
    actionDescription: {
        color: '#FFFFFF'
    },
    actionTimestamp: {
        fontSize: 10,
        color: '#CCCCCC',
    }
})



export default QuickAction
