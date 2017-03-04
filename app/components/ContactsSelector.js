import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, ScrollView, ListView, Image} from 'react-native'

import LauncherApp from './LauncherApp'
import Apps from '../constants/apps'
import Contacts from 'react-native-contacts'

class ContactsSelector extends Component {

    constructor(props) {
		super(props)
		this.state = {
            contacts: [{recordID: '6b2237ee0df85980', givenName: 'Blut', thumbnailPath: 'c'}]
		}
	}

    componentDidMount() {
        Contacts.getAll((err, contacts) => {
            if(err && err.type === 'permissionDenied'){
                // x.x
            } else {
                this.setState({
                    contacts: contacts
                })
            }
        })
    }
    
	render () {
		const props = this.props
        let _scrollView = null
		return (
			<View style={styles.contactsWrapper} >
                <ScrollView
                    ref={(scrollView) => { _scrollView = scrollView; }}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    style={[styles.scrollView, styles.horizontalScrollView]}>

                    { this.state.contacts.map( (contact) => {
                        const imagePath = contact.thumbnailPath
                        return (
                            <View key={contact.recordID} >
                            <Image
                                style={{width: 50, height: 50}}
                                source={{uri: imagePath}}
                            />
                            <Text>{contact.givenName}</Text>
                            </View>
                        )
                    } ) }

                </ScrollView>

			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	contactsWrapper: {
        flex: 1,
        backgroundColor: 'pink'
	},
    scrollView: {
    backgroundColor: '#6A85B1',
    height: 300,
  },
  horizontalScrollView: {
    height: 120,
  },
  containerPage: {
    height: 50,
    width: 50,
    backgroundColor: '#527FE4',
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: '#888888',
    left: 80,
    top: 20,
    height: 40,
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },
  img: {
    width: 64,
    height: 64,
  }
})



export default ContactsSelector
