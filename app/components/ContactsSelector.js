import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, ListView, Image} from 'react-native'

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

    selectContact = (contact) => {
        alert(contact.givenName)
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
                    style={styles.scrollView}>

                    { this.state.contacts.map( (contact) => {
                        const imagePath = contact.thumbnailPath
                        return (
                            
                            <TouchableOpacity 
                                onPress={() => {
                                    this.selectContact(contact)
                                }}
                                key={contact.recordID} 
                                style={styles.contactWrapper}
                                >
                                <Image
                                    style={styles.contactImage}
                                    source={{uri: imagePath}}
                                />
                                <Text style={styles.contactLabel}>{contact.givenName}</Text>
                            </TouchableOpacity>
                        )
                    } ) }

                </ScrollView>

			</View>
		)
		
	}
}

const styles = StyleSheet.create({
    contactsWrapper: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },

    scrollView: {
    },

    containerPage: {
        height: 50,
        width: 50,
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
        height: 64
    },

    contactWrapper: {
        marginLeft: 10,
        marginRight: 10
    },

    contactImage: {
        width: 50, 
        height: 50, 
        borderRadius: 50
    },

    contactLabel: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
})



export default ContactsSelector
