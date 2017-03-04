import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, Image, Linking} from 'react-native'

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class WeatherWidget extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }

        // Initialize interval
        setInterval( () => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

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
        const hours = this.state.time.getHours()
        const minutes = this.state.time.getMinutes()
        const dayOfWeek = weekDays[this.state.time.getDay()]
        const month = months[this.state.time.getMonth()]
		return (
			<View style={styles.weatherWrapper}>
                <View style={styles.timeWrapper}>

                    <Text style={styles.timeClock}>
                        { `${hours ? hours : 12}:${minutes < 10 ? '0'+minutes : minutes} ${hours < 12 ? 'AM' : 'PM'}`  }
                    </Text>
                    <Text style={styles.timeCalendar}>
                        { `${dayOfWeek.substring(0, 3)}, ${month.substring(0, 3)} ${this.state.time.getDate()}` }
                    </Text>
                </View>

                <View style={styles.forecastWrapper}>
                    <Image style={{width: 30, height: 30}} source={require('./../images/weather/sun.png')} />
                </View>

                <View style={styles.timeOfDayWrapper}>
                </View>

                
			</View>
		)
	}
}

const styles = StyleSheet.create({

    weatherWrapper: {
        flex: 1,
        padding: 2,
        flexDirection: 'row'
    },
    timeWrapper: {
        flexGrow: 1,
        backgroundColor: 'blue',
        flexDirection: 'column',
        alignItems: 'center'
    },
    forecastWrapper: {
        flexGrow: 5,
        flexDirection: 'column'
    },

    timeOfDayWrapper: {
        flexGrow: 7,
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },

    title: {
        color: '#FFFFFF'
    },


    timeCalendar: {
        color: '#FFFFFF'
    },
    timeClock: {
        fontSize: 15,
        color: '#FFFFFF'
    }
})

export default WeatherWidget