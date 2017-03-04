import React, {Component, PropTypes} from 'react'
import { View, Text, StyleSheet, TouchableHighlightImage, Linking, ListView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Reminder from './Reminder'
import RNCalendarEvents from 'react-native-calendar-events'

class Reminders extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    // componentDidMount() {
    //     RNCalendarEvents.fetchAllEvents('2016-08-19T19:26:00.000Z', '2017-08-19T19:26:00.000Z', ['1', '2'])
    //         .then(events => {
    //             // handle events
    //             // alert('success')
    //         })
    //         .catch(error => {
    //         // handle error
    //         alert(error)
    //     });
    // }

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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const reminders = ds.cloneWithRows(props.reminders)
		return (
			<View style={styles.remindersWrapper}>
                <LinearGradient colors={['#00000099', '#00000033', '#00000000']} style={styles.linearGradient}>

                    <Text style={styles.remindersHeader}>
                        REMINDERS
                    </Text>

                    <ListView
                    dataSource={reminders}
                    renderRow={(rowData) => ( <Reminder {...rowData} /> )}

                />
                </LinearGradient>
			</View>
		)
	}
}

const styles = StyleSheet.create({

    remindersWrapper: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
        padding: 5
    },
    remindersHeader: {
        color: '#CCCCCC',
        fontSize: 9,
        textAlign: 'center',
        marginBottom: 10,
    }
})

export default Reminders