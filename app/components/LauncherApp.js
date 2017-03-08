import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Linking} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const HOME = require('./../images/nav/home.png')
const LIGHT = require('./../images/nav/lightbulb.png')
const CALENDAR = require('./../images/nav/calendar.png')
const CONTACTS = require('./../images/nav/contact.png')
const DRAW = require('./../images/nav/draw.png')

class LauncherApp extends Component {

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

    getIcon = () => {
        let result = ''

        switch(this.props.label) {
            case 'Home':
                result = HOME
            break;
            case 'Light':
                result = LIGHT
            break;
            case 'Contacts':
                result = CONTACTS
            break;
            case 'Calendar':
                result = CALENDAR
            break;
            case 'Draw':
                result = DRAW
            break;
            
        }
        return result
    }

    onPress = () => {
        // Check if should go to a state or URI
        if (this.props.nav) {

            if (this.props.nav === 'First') {
                this.props.navigatePop()
            } else {
                this.props.navigatePush(this.props.nav)
            }
            
        } else if (this.props.uri) {
            Linking.canOpenURL(this.props.uri).then(supported => {
                if (supported) {
                    Linking.openURL(this.props.uri)
                } else {
                    alert('Don\'t know how to open URI: ' + this.props.uri)
                }
            })
        }
        
    }

	render () {
		const props = this.props;
		return (
			<View style={styles.appWrapper}>
                <TouchableOpacity activeOpacity={0.6} onPress={this.onPress}>
                    <Image
                        style={styles.launcherIcon}
                        source={this.getIcon()}
                    />

                    {/*<Text style={styles.appText}>
                        {this.props.id}
                        </Text>*/}
                </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({

appText: {
    width: 50, 
    height: 50,
    textAlign: 'center'
},
  launcherIcon: {
      width: 50,
      height: 50
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
    appWrapper: {
        marginBottom: 15
        
	}
})



export default LauncherApp
