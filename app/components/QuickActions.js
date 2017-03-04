import React, {Component, PropTypes} from 'react'
import { View, Text, StyleSheet, Image, Linking, ListView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import QuickAction from './QuickAction'

class QuickActions extends Component {

    constructor(props) {
        super(props)

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const actions = ds.cloneWithRows(props.actions)
		return (
			<View style={styles.quickActionsWrapper}>
                <LinearGradient colors={['#00000099', '#00000033', '#00000000']} style={styles.linearGradient}>

                    <Text style={styles.quickActionsHeader}>
                        QUICK ACTIONS
                    </Text>

                    <ListView
                    dataSource={actions}
                    renderRow={(rowData) => ( <QuickAction {...rowData} /> )}
                />
                </LinearGradient>
			</View>
		)
	}
}

const styles = StyleSheet.create({

    quickActionsWrapper: {
        flex: 1
    },
    linearGradient: {
        flex: 1,
        padding: 5
    },
    quickActionsHeader: {
        color: '#CCCCCC',
        fontSize: 9,
        textAlign: 'center',
        marginBottom: 10,
    }
})

export default QuickActions