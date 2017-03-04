import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet, PanResponder, ListView} from 'react-native'

import NavButton from './NavButton'
import LauncherList from './LauncherList'
const CIRCLE_SIZE = 20;

class PanResponderExample extends Component {

  constructor(props) {
	  super(props);
	  this._panResponder = {};
	  this._previousLeft = 0;
	  this._previousTop = 0;
	  this._circleStyles = {};
	  this.circle = null;

	  this.state = {
		  circles: []
	  }
	}

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 80;
    this._previousTop = 80;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
  }

    componentDidMount() {
    this._updateNativeStyles();
  }

    render() {
    return (
      <View style={{flex: 1}}>

		  {
			  this.state.circles.map((c, i) => (
				  <View key={i} style={{width: CIRCLE_SIZE,
					height: CIRCLE_SIZE,
					borderRadius: CIRCLE_SIZE / 2,
					backgroundColor: '#FFFFFF',
					position: 'absolute',
					left: c.x,
					top: c.y}}>
						{/*<Text>x</Text>*/}
					</View>

			  ))
		  }
        <View style={styles.circle}
          ref={(circle) => {
            this.circle = circle;
          }}
          { ...this._panResponder.panHandlers }
        />
      </View>
    );
  }

  _highlight = () => {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  }

  _unHighlight = () => {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  }

  _updateNativeStyles() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  _handleStartShouldSetPanResponder() {
    return true;
  }

  _handleMoveShouldSetPanResponder() {
    return true;
  }

  _handlePanResponderGrant = (e, gestureState) => {
    this._highlight();
  }

    _handlePanResponderMove = (e, gestureState) => {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;

	const newCircles = this.state.circles
	newCircles.push({x: this._previousLeft + gestureState.dx, y: this._previousTop + gestureState.dy})
	this.setState({
		circles: newCircles
	})
    this._updateNativeStyles();
  }

  _handlePanResponderEnd = (e, gestureState) => {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }

}

class ThirdScreen extends Component {



	render () {
		const props = this.props;
		return (
			<View style={styles.container}>

				<View style={styles.navBar}>
					<LauncherList />
				</View>

				<PanResponderExample  style={{flex: 1}}/>

				{/*<View style={styles.mainContent}>

					

					
				</View>*/}
			</View>
		)
		
	}
}

const customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  }
})

const styles = StyleSheet.create({
	circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 50,
    top: 50,
  },
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#000000'
	},

	backgroundImageWrapper: {
		flex: 1,
		position: 'absolute',
        top: 0, 
		bottom: 0, 
		left: 0, 
		right: 0
	},

	navBar: {
		flexBasis: 75,
		backgroundColor: '#F4DC3D',
		justifyContent: 'center',
		alignItems: 'center'
	},

	mainContent: {
		flex: 1,
		flexDirection: 'row'
	},

	mainContentSection: {
		margin: 10,
		flex: 1,
		backgroundColor: 'rgba(0,0,0, 0.5)'
	},


	labelText: {
		flexGrow: 1,
		textAlign: 'left',
		color: '#FFFFFF',
		paddingBottom: 10
	},

	hueControl: {
		flex: 1,
		alignItems: 'center'
	},

	sliderWrapper: {
		flexDirection: 'row',
		flexBasis: 30,
		marginBottom: 10
	},

	hueGradient: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		flex: 1,
		width: 200,
		height: 200
	},
	switchRow: {
		borderBottomWidth: 1,
		borderBottomColor: '#333333',
		flexDirection: 'row',
		alignItems: 'center'
	},
	switchLabel: {
		flexGrow: 1,
		color: '#FFFFFF',
		paddingLeft: 5
	},
	switchInput: {
		paddingTop: 4,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default ThirdScreen