import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Linking} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


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
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                    {/*<Image
                        style={styles.launcherIcon}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />*/}

                    <Text style={styles.appText}>
                        x
                        </Text>
                </LinearGradient>

                
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
    //   flex: 1,
    //   flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
	// appWrapper: {
    //     flex: 1,
    //     borderRadius: 20,
    //     padding: 15,
    //     marginBottom: 15,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'blue'
	// }

    appWrapper: {
        marginBottom: 15
        
	}
})



export default LauncherApp
