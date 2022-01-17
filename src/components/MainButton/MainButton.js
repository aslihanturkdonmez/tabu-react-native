import React from 'react';
import TouchableHighlight from '../TouchableHighlight';
import Text from '../Text';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainButton = ({styleWrapper, styleContainer, onPress, underlayColor='transparent', activeOpacity=0.9, icon, iconSize, text, textStyle, iconStyle  }) => {
    return (
        <TouchableHighlight
                    styleWrapper={styleWrapper}
                    styleContainer={styleContainer}
                    onPress={onPress}
                    underlayColor={underlayColor}
                    activeOpacity={activeOpacity}
                >
                    <View style={{flexDirection:'row', alignItems:'center',}}>
                        <Icon 

                            name={icon}
                            size={iconSize}
                            style={iconStyle}
                        />
                        <Text style={textStyle}>{text}</Text>
                    </View>
                </TouchableHighlight>
    )
}

export default MainButton