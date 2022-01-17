import React from 'react';
import { Text } from 'react-native';
import styles from './Text.style';
import PropTypes from 'prop-types';

const MyText = ({style, onPress, onTextLayout, numberOfLines, children, translation, translationData }) => {

/*     const renderText = () =>{
        if(!translation) return children;
        return i18n.t(translation).replace(
            /{{(\w+)}}/g, 
            (placeholderWithDelimiters, placeholderWithoutDelimiters) =>
            translationData.hasOwnProperty(placeholderWithoutDelimiters) ? 
            translationData[placeholderWithoutDelimiters] : placeholderWithDelimiters
        );
    } */

    return(
        <Text 
            style={[styles.text, style]}
            onPress={onPress}
            onTextLayout={onTextLayout}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    );
};

export default MyText;

MyText.propTypes = {
    style:PropTypes.any,
    onPress: PropTypes.func,
    onTextLayout:PropTypes.func,
    numberOfLines:PropTypes.number,
    children:PropTypes.any,
    translation: PropTypes.string,
    translationData: PropTypes.object,
}

MyText.defaultProps={
    style: {},
    onPress: null,
    onTextLayout:null,
    numberOfLines:null,
    children:null,
    translation:null,
    translationData:{},
}
