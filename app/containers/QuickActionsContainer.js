import { connect } from 'react-redux'
import { ListView } from 'react-native'

import QuickActions from '../components/QuickActions'

const quickActions = {
    'Han': [
        {
            action: 'Order',
            target: 'Panini Haven',
            description: 'Spatula\'s Signature Panini with the Secret Sauce',
            link: '',
            type: 'eat24',
            image: 'http://sreweb.com/panini_new/panini_t.jpg',
            ts: 'Last ordered: 2/4/17'
        },

        {
            action: 'Order',
            target: 'Burger Combo',
            description: 'Burger Combo #1',
            link: '',
            type: 'eat24',
            image: 'http://www.restaurantnews.com/wp-content/uploads/2013/05/Huddle-House-Triple-Huddle-Burger-Combo.jpg',
            ts: 'Last ordered: Yesterday'
        },

        {
            action: 'Rinse',
            target: 'Rinse',
            description: 'Rinse at 5:30 PM',
            link: '',
            type: 'rinse',
            image: 'http://a4.mzstatic.com/us/r30/Purple2/v4/15/50/db/1550dbef-416a-6104-0ac5-3014082b91df/mzl.rppitrzt.175x175-75.jpg',
            ts: 'Last ordered: Yesterday'
        },
        {
            action: 'Uber',
            target: 'Uber',
            description: 'Home (123 Pizza Ave, Santa Monica, CA 90401)',
            link: '',
            type: 'uber',
            image: 'https://freaklootera.files.wordpress.com/2017/01/grsl-svods-x3wxwqkyplloxd2wkwlumpxfytx2dmbaltktrskhdx4rsdlwavmv5lhqw300.png?w=300',
            ts: 'Last ride: Yesterday'
        }
    ],
    'Sachin': [
        {
            action: 'Pay',
            target: 'Chase',
            description: 'Credit Card Bill',
            link: '',
            type: 'chase',
            image: 'https://lh4.ggpht.com/zfXLEYjCcn-peZoNQpwfqYTg-KtFuzs80Twae8obhfL_HS4ydGsJ1EUHIoKcyhLw8Pk=w300',
            ts: 'Last payment: 1/8/17'
        },
    ]
}


const mapStateToProps = (state) => {
    // Get the selected contact name

    const contactName = (state.contactState.contact ? state.contactState.contact.givenName : 'Han')
    return {
        actions: quickActions[contactName]
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuickActions)