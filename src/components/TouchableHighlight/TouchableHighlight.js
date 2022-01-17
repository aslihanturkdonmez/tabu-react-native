import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';

const MyTouchableHighlight = ({children, activeOpacity=0.9, underlayColor="transparent", styleWrapper, styleContainer, onPress}) => {
    return(
        <TouchableHighlight
            activeOpacity={activeOpacity}
            underlayColor={underlayColor}
            style={styleWrapper}
            onPress={onPress}
            
        >
            <View style={styleContainer}>
                {children}
            </View>
        </TouchableHighlight>
    )
}

export default MyTouchableHighlight;

MyTouchableHighlight.propTypes = {
    children: PropTypes.any,
    activeOpacity: PropTypes.number,
    underlayColor: PropTypes.string,
    styleWrapper: PropTypes.any,
    styleContainer: PropTypes.any,
    onPress: PropTypes.func
};
MyTouchableHighlight.defaultProps = {
    children: null,
    activeOpacity: 0.9,
    underlayColor:'transparent',
    styleWrapper:{},
    styleContainer:{},
    onPress: () =>{},
}