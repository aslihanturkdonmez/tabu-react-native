import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import getStyle from './TeamCountInput.style';

const TeamCountInput = ({onPressPlus, onPressMinus, count}) => {

    const styles=getStyle();

    return (
        <View style={styles.container}>
            <Icon 
                name="plus-circle-outline"
                size={25}
                onPress={onPressPlus}
                style={styles.icon}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{count}</Text>
            </View>
            <Icon 
                name="minus-circle-outline"
                size={25}
                onPress={onPressMinus}
                style={styles.icon}
            />
        </View>
    )
}

export default TeamCountInput
