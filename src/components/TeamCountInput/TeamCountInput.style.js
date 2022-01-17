import { StyleSheet, Dimensions } from 'react-native';

function getStyle(){

    return StyleSheet.create({

        container: {
            flexDirection:'row',
            alignItems:'center',
            padding: 4,
            borderRadius:30,
            borderWidth:1,
            borderColor: '#d1d2e0',
            paddingHorizontal:8,
        },
        icon:{
            color:'#676b98'
        },
        textContainer:{
            borderRadius:20,
            backgroundColor:'#d1d2e0',
            paddingHorizontal:9,
            padding: 3,
            marginHorizontal:10,
        },
        text:{
            fontSize:16,
            borderRadius:25,
            color:'#676b98',
        }

    })
};

export default getStyle;