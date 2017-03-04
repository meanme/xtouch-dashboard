import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Linking} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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

	render () {
		const props = this.props;
		return (
			<View style={styles.appWrapper}>
                <TouchableOpacity activeOpacity={0.6}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    {/*<Image
                        style={styles.launcherIcon}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />*/}

                    <Text style={styles.appText}>
                        x
                        </Text>
                </LinearGradient>
                </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({

    linearGradient: {
        flex: 1,
        borderRadius: 5
    },

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
