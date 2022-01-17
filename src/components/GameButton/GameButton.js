import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchableHighlight from '../TouchableHighlight';

const GameButton = ({onPress, icon, iconSize, text, styleContainer, styleWrapper, iconStyle, textStyle}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            styleContainer={styleContainer}
            styleWrapper={styleWrapper}
        >
            {
                text ?
                    <Text style={[textStyle, {textShadowOffset:{
                        width:2,
                        height:2,
                    },
                    textShadowColor:'#fff',
                    textShadowRadius:8,}]}>{text}</Text>
                :
                    <Icon 
                        name={icon}
                        size={iconSize}
                        style={iconStyle}
                    />
            }

        </TouchableHighlight>
    )
}

export default GameButton
