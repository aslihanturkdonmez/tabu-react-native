import { StyleSheet, Dimensions } from 'react-native';
import {colors} from '../../resources';

function getStyle(){

    return StyleSheet.create({

        container: {
            flex:1, 
            backgroundColor:colors.background,
        },

        headerContainer:{
            flex:2, 
            justifyContent:'center',
        },
        header: {
            fontSize:70, 
            color:colors.header_color,
            fontWeight:'bold' ,
            textAlign:'center',
            textShadowOffset:{
                width:0,
                height:5,
            },
            textShadowColor:'#fff',
            textShadowRadius:8,
        },

        mainButtonOuterContainer:{
            flex:3,
        },
        mainButtonWrapper:{
            alignItems:'center', 
        },
        mainButtonContainer:{
            backgroundColor:colors.mainButtonContainer_color,
            borderRadius:7, 
            width: 230,
            marginTop:20,

            elevation: 20,
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity:0.2,
            shadowRadius:5,
            shadowColor:colors.shadowColor,
        },
        mainButtonText:{
            color:colors.mainButtonText,
            fontSize:20, 
            fontWeight:'bold', 
            padding: 10, 
            textAlign:'center',
        },
        mainButtonIcon:{
            color:colors.mainButtonIcon,
            marginLeft: 10,
        },

        gameScreenContainer:{
            flex:1,
            justifyContent:'space-around',
        },

        team:{
            textAlign:'center', 
            fontSize:30, 
            fontWeight:'bold', 
            color:colors.team,
        },
        timerContainer: {
            flexDirection:'row', 
            justifyContent:'center',
            marginBottom:30,
            marginTop:50,
        },
        timerIcon:{
            alignSelf:'center', 
            marginRight:4,
            marginTop:2,
            color:colors.timerIcon,
        },
        timer:{
            alignSelf:'center', 
            fontSize:35, 
            fontWeight:'bold',
            color:colors.timer,
        },

        gameButtonContainer: {
            flexDirection:'row', 
            justifyContent:'space-evenly',
        },

        gameButtonIconWrapper: {
            backgroundColor:'transparent', 
            borderRadius:8, 
            padding: 8, 
            alignItems: 'center', 
            justifyContent:'center',
        },
        gameButtonTextWrapper:{
            justifyContent:'center',
        },
        gameButtonTextContainer:{
            borderColor:colors.gameButtonTextContainer,
            borderRadius:8, 
            paddingHorizontal: 15, 
            borderWidth: 0.7,

            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity:0.2,
            shadowRadius:5,
            shadowColor:colors.shadowColor,
            elevation:30,
        },
        gameButtonText:{
            fontSize:40,
            alignSelf:'center',
            color:colors.gameButtonText,
        },
        score:{
            fontSize:30, 
            alignSelf:'center', 
            padding:10, 
            fontWeight:'bold',
            color:colors.score,
            marginBottom:40,
        },

        modalContainer:{
            backgroundColor:'rgba(0, 0, 0, 0.7)',
            justifyContent:'center',
            width:Dimensions.get('screen').width,
            height:Dimensions.get('screen').height,
            alignItems:'center',
            flex:1,
            //position:'absolute',
        },
        modalInnerContainer:{
            backgroundColor:colors.modalInnerContainer,
            padding:20,
            paddingHorizontal: 45,
            borderRadius:7,
            marginVertical: Platform.OS === 'ios' ? 55 : 30,
            marginHorizontal:17,
        },

        okayButtonContainer:{
            alignItems: 'center',
            marginTop:30,
        },
        okayButtonInnerContainer:{
            shadowOffset: {
                width: 0,
                height: 0
            },
            shadowOpacity:0.2,
            shadowRadius:5,
            shadowColor:colors.shadowColor, 
            elevation:8,
            backgroundColor:'#fff',
            borderRadius:3,
            paddingHorizontal:8,
            paddingVertical:3,
        },
        okayButtonText:{  
            paddingVertical:6, 
            borderRadius:3, 
            fontWeight:'bold', 
            fontSize:14,
            color:colors.okayButtonText
        },
        okayButtonIcon:{
            color:colors.okayButtonIcon,
            marginRight:4,
        },
        scoreTableContainer:{
            alignItems:'center', 
            padding: 10, 
            paddingHorizontal:15, 
            borderRadius:6, 
            marginVertical:8,
            borderColor:colors.scoreTableContainer, 
            borderWidth: 0.7,
        },
        scoreTableTitle:{
            fontSize:18, 
            fontWeight:'800',
            marginBottom:5,
        },
        scoreTableInnerContainer:{
            flexDirection:'row', 
            alignItems:'center', 
            padding:3,
        },
        scoreTableName:{ 
            fontSize:16, 
            margin: 5, 
        },
        scoreTableScore:{
            paddingHorizontal:8, 
            fontSize:18, 
            padding: 5,
        },
        rules:{
            fontSize:16, 
            textAlign:'center',
        },
        teamCountContainer:{
            alignItems:'center', 
            justifyContent:'space-between',
            marginVertical:10,
        },
        teamCountTitle:{
            fontSize:18, 
            color:colors.teamCountTitle,
            fontWeight:'bold', 
            marginRight:15,
            marginBottom:7,
            textAlign:'center',
        },
        timeUpContainer:{
            flexDirection:'row', 
            alignItems:'center', 
            marginBottom:5,
        },
        timeUpTitle:{
            fontSize:22, 
            color:colors.timeUpTitle,
            fontWeight:'bold' 
        },
        timeUpIcon:{
            color:colors.timeUpIcon,
            marginRight:4,
        },
        breakModalTextContainer:{
            alignItems:'center',
        },
        breakModalText:{
            fontSize:16,
            marginTop:5,
        },
        breakTime:{
            fontSize:26, 
            fontWeight:'bold',
            color:colors.breakTime,
        },
        homeIcon:{
            marginTop:10,
            marginRight:5, 
            alignSelf:'flex-end',
            color:colors.homeIcon,
        },
        winnerText:{
            alignSelf:'center',
            fontSize:25,
            fontWeight:'bold',
            marginBottom:14,
            color:colors.winnerText,

        }

    })
};

export default getStyle;