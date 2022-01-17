import React from 'react';
import { FlatList, View } from 'react-native';
import Text from '../Text';
import getStyle from './TabooCard.style';

const TabooCard = ({word, taboos}) => {
    const styles = getStyle();


    const renderItem = ({item}) => <Text style={styles.taboo}>{item}</Text>

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.wordContainer}>
                        <Text style={styles.word}>{word}</Text>
                    </View>
                    <FlatList 
                        data={taboos}
                        renderItem={renderItem}
                        contentContainerStyle={styles.tabooContainer}
                    />
                </View>
        </View>
        </View>
    )
}

export default TabooCard
