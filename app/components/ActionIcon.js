import React, {Component, PropTypes} from 'react'
import { View, Text, StyleSheet, Image, Linking, ListView } from 'react-native'

const EAT24 = require('../images/actions/eat24.png')
const RINSE = require('../images/actions/rinse.png')
const UBER = require('../images/actions/uber.png')
const UBEREATS = require('../images/actions/ubereats.png')
const CHASE = require('../images/actions/chase.png')
const PHONE = require('../images/actions/phone.png')

class ActionIcon extends Component {

    static props = {
        type: PropTypes.string.isRequired
    }

    getIcon = () => {
        let result = ''

        switch(this.props.type) {
            case 'eat24':
                result = EAT24
            break;
            case 'phone':
                result = PHONE
            break;
            case 'chase':
                result = CHASE
            break;
            case 'rinse':
                result = RINSE
            break;
            case 'uber':
                result = UBER
            break;
            case 'ubereats':
                result = UBEREATS
            break;
            
        }
        return result
    }

	render () {
		const props = this.props
		return (
            <View>
                <Image style={styles.actionIcon} source={this.getIcon()}>
			    </Image>
            </View>
			
		)
	}
}

const styles = StyleSheet.create({
    actionIcon: {
        width: 18,
        height: 18
    }
})

export default ActionIcon