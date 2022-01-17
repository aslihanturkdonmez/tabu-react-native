import { Dimensions, StyleSheet } from 'react-native';

function getStyle(){

    return StyleSheet.create({

        wrapper:{
            alignItems:'center',
            flex:1,

        },
        container: {
            marginVertical:20,
            width:Dimensions.get('screen').width/1.5,
            flex:1,
            elevation:20
            
        },
        innerContainer:{
            shadowOffset: {
                width: 0,
                height: 0,
              },
            shadowOpacity:0.2,
            shadowColor:'black',
            shadowRadius:4,
            borderRadius:8,
            flex:1,
        },
        wordContainer:{
            backgroundColor:'#492360',
            borderTopLeftRadius:8,
            borderTopRightRadius:8,
            paddingHorizontal:16,
            paddingVertical:10,
            justifyContent:'center',
            flex:1,
        },
        word:{
            textTransform:'uppercase',
            fontSize:20,
            textAlign:'center',
            color:'#fff',
            fontWeight:'bold',
        },
        tabooContainer:{
            backgroundColor:'#fff',
            borderBottomLeftRadius:8,
            borderBottomRightRadius:8,
            height:190,
            justifyContent:'space-evenly',
        },
        taboo:{
            textAlign:'center',
            marginTop:5,
            fontSize:16,
            fontWeight:'400',
            color:'#000',
        }
        
    })
};

export default getStyle;