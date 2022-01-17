import React, {useState, useEffect} from 'react';
import { View, Text,TouchableHighlight, SafeAreaView } from 'react-native';
import words from '../../../words.json';
import Modal from '../../components/Modal';
import parseData from '../../utils/parseData';
import {GameButton, MainButton, TabooCard, TeamCountInput} from '../../components';
import getStyle from './Home.style';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';



const Home = () => {

    const [teamCount, setTeamCount] = useState(2);
    const [wordsArray, setWordsArray] = useState(parseData(words));
    const [startFlag, setStartFlag] = useState(false);
    const [shownWord, setShownWord] = useState(undefined);
    const [timer, setTimer] = useState(60);
    const [breakTimeSettings, setBreakTimeSettings] = useState(10);
    const [breakTime, setBreakTime] = useState(10);
    const [breakModalVisibility, setBreakModalVisibility] = useState(false);
    const [teams, setTeams] = useState(undefined);
    const [turn, setTurn] = useState(0);
    const [startNowFlag, setStartNowFlag] = useState(false);
    const [settingsModalVisibility, setSettingsModalVisibility] = useState(false);
    const [rulesModalVisibility, setRulesModalVisibility] = useState(false);
    const [endOfGameModalVisibility, setEndOfGameModalVisibility] = useState(false);

    const styles=getStyle();

    
    useEffect(() => {
        
        let interval = null;
        let breakInterval=null;
        
        if(!startFlag) return;
        
        if ( timer !==0 ){
            interval = setInterval(() => setTimer(t => t -1), 1000);
        } else if ( timer === 0 ) {
            
            if(teams[turn].score >= 20){
                setEndOfGameModalVisibility(true);
                return;
            }
            
            setBreakModalVisibility(true);
            
            breakInterval=setInterval(() => setBreakTime(b => b-1), 1000);
            
            if(breakTime === 0 || startNowFlag ){
                
                //sıranın circle şeklinde dönmesi için
                if(turn === teams.length-1) {
                    setTurn(0);
                }else{
                    setTurn(turn+1);
                }
                setBreakModalVisibility(false);
                setTimer(60);
                pickRandomWord();
                clearInterval(breakInterval);
                setBreakTime(breakTimeSettings);
                setStartNowFlag(false);
            }
        }
        
        return () => {
            clearInterval(interval)
            clearInterval(breakInterval);
        }
    }, [startFlag, timer, breakTime]);
    
    const createTeams = () => {
        let arr=[];
        for (let i = 0; i < teamCount; i++) {
            arr.push({
                id:i,
                name:String.fromCharCode(i+65),
                score:0
            })
        }
        return arr;
    }

    const startNow = () => {
        setStartNowFlag(true);
    }

    const startGame = () => {
        setTeams(createTeams());
        pickRandomWord();
        setStartFlag(true);
    }

    const generateRandomNumber = () => {
        const number =Math.floor(Math.random() * (wordsArray.length - 1));
        return number;
    }

    const pickRandomWord = () => {
        const pickedId=generateRandomNumber();
        const pickedWord=wordsArray[pickedId];

        setShownWord(pickedWord);
        const updatedWords=[...wordsArray];
        updatedWords.splice(pickedId, 1);

        //Tüm kelimeler kullanıldıysa, oyun ilk haline döner.
        if(!updatedWords.length){
            return setWordsArray(parseData(words));
        }
        setWordsArray(updatedWords);

    }

    const correctAnswer = () => {
        
        pickRandomWord();
        const temp=[...teams];

        temp[turn].score=temp[turn].score + 1;
        setTeams(temp)
    }

    const wrongAnswer = () => {
        pickRandomWord();
        if(teams[turn].score === 0 ) return;

        const temp=[...teams];
        temp[turn].score=temp[turn].score - 1;
        setTeams(temp);
    }

    const updateTeamCount = (set) => {
        if(teamCount === 2 && set === -1 || teamCount === 5 && set === 1){
            return;
        }
        setTeamCount(teamCount + set)
    }

    const updateBreakTime = (set) => {
        if(breakTimeSettings === 10 && set === -10 || breakTimeSettings >= 120 && set === 10){
            return;
        }
        setBreakTime(breakTimeSettings + set);
        setBreakTimeSettings(breakTimeSettings + set);
    }

    const settings = () => {
        setSettingsModalVisibility(true);
    }

    const backStartScreen = () => {
        setEndOfGameModalVisibility(false);
        setStartFlag(false);
        setTurn(0);
        setTeams(createTeams());
        setTimer(60);
    }

    const renderScoreTable = () => {
        return(
            <View style={styles.scoreTableContainer}>
                <Text style={styles.scoreTableTitle}>Score Table</Text>
                {
                    teams.map((t) =>{
                        return (
                            <View style={[styles.scoreTableInnerContainer, t.id===teams[turn].id ? {backgroundColor:'#e1e1ea'} : undefined]} key={t.id}>
                                <Text style={styles.scoreTableName}>Team {t.name}</Text>
                                <Icon 
                                    name='arrow-right-bold-outline'
                                    size={20}
    
                                />
                                <Text style={styles.scoreTableScore}>{t.score}</Text>
                            </View>
                        )
                    } )
                }
            </View>
        )
    }

    const renderEndOfGameModal = () => {
        return (
            <Modal transparent={true} visible={endOfGameModalVisibility}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.winnerText}>Winner Team {teams[turn].name}</Text>
                        {renderScoreTable()}
                        <TouchableHighlight
                                    onPress={backStartScreen} 
                                    underlayColor="transparent"
                                    activeOpacity={0.6}
                                >
                                    <View style={[styles.okayButtonContainer, {alignItems:'flex-end'}]}>
                                        <View style={[styles.okayButtonInnerContainer, {flexDirection:'row', alignItems:'center'}]}>
                                            <Icon 
                                                name='home-outline'
                                                size={22}
                                                style={styles.okayButtonIcon}
                                            />
                                            <Text style={styles.okayButtonText}>Home</Text>
                                        </View>
                                    </View>
                            </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }

    const renderRulesModal = () => {
        return (
            <Modal transparent={true} visible={rulesModalVisibility}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <Text style={styles.rules}>The only rule is, there are no rules :){"\n\n"}As soon as possible</Text>
                        <TouchableHighlight
                                onPress={() => setRulesModalVisibility(false)} 
                                underlayColor="transparent"
                                activeOpacity={0.6}
                            >
                                <View style={styles.okayButtonContainer}>
                                    <View style={styles.okayButtonInnerContainer}>
                                        <Text style={styles.okayButtonText}>Okay</Text>
                                    </View>
                                </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }

    const renderSettingsModal = () => {
        return (
            <Modal transparent={true} visible={settingsModalVisibility}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <View style={styles.teamCountContainer}>
                            <Text style={styles.teamCountTitle}>Team Count</Text>
                            <TeamCountInput 
                                count={teamCount}
                                onPressPlus={() => updateTeamCount(+1)}
                                onPressMinus={() => updateTeamCount(-1)}
                            />
                        </View>
                        <View style={styles.teamCountContainer}>
                            <Text style={styles.teamCountTitle}>Break Time</Text>
                            <TeamCountInput 
                                count={breakTimeSettings}
                                onPressPlus={() => updateBreakTime(+10)}
                                onPressMinus={() => updateBreakTime(-10)}
                            />
                        </View>
                        <View>
                            <TouchableHighlight
                                onPress={() => setSettingsModalVisibility(false)} 
                                underlayColor="transparent"
                                activeOpacity={0.6}
                            >
                                <View style={styles.okayButtonContainer}>
                                    <View style={styles.okayButtonInnerContainer}>
                                        <Text style={styles.okayButtonText}>Okay</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }

    const renderBreakModal = () => {
        return (
            <Modal transparent={true} visible={breakModalVisibility}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                        <View style={styles.timeUpContainer}>
                            <Icon 
                                name="timer-off-outline"
                                size={27}
                                style={styles.okayButtonIcon}
                            
                            />
                            <Text style={styles.timeUpTitle}>Time's Up</Text>
                        </View>
                        {renderScoreTable()}
                        <View style={styles.breakModalTextContainer}>

                            <Text style={styles.breakModalText}>Now, its Team {turn+1 === teams.length ? teams[0].name : teams[turn+1].name }'s turn</Text>
                            <Text style={styles.breakModalText}>Game will start in </Text>
                            <Text style={styles.breakTime}>{breakTime} </Text>
                            <Text style={styles.breakModalText}>seconds</Text>
                        </View>
                            <TouchableHighlight
                                onPress={startNow}
                                underlayColor="transparent"
                                activeOpacity={0.6}
                            >
                                <View style={styles.okayButtonContainer}>
                                    <View style={styles.okayButtonInnerContainer}>
                                        <Text style={styles.okayButtonText}>Start Now</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>

                    </View>
                </View>

            </Modal>
        )
    }

    const renderStartScreen = () => {
        return (
            <>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>TABOO</Text>
                </View>
                <View style={styles.mainButtonOuterContainer}>
                    <MainButton 
                        styleWrapper={styles.mainButtonWrapper}
                        styleContainer={styles.mainButtonContainer}
                        onPress={startGame}
                        text={"New Game"}
                        textStyle={[styles.mainButtonText, {fontWeight:'bold',}]}
                        icon={"play-circle-outline"}
                        iconSize={29}
                        iconStyle={styles.mainButtonIcon}
                    
                    />
                    <MainButton 
                        styleWrapper={styles.mainButtonWrapper}
                        styleContainer={styles.mainButtonContainer }
                        text={"Rules"}
                        textStyle={styles.mainButtonText}
                        icon={"information-outline"}
                        iconSize={29}
                        iconStyle={styles.mainButtonIcon}
                        onPress={() => setRulesModalVisibility(true)}
                    
                    />
                    <MainButton 
                        styleWrapper={styles.mainButtonWrapper}
                        styleContainer={styles.mainButtonContainer}
                        text={"Settings"}
                        textStyle={styles.mainButtonText}
                        icon={"cog-outline"}
                        iconSize={29}
                        iconStyle={styles.mainButtonIcon}
                        onPress={settings}
                    
                    />
                </View>
            </>
        )
    }

    const renderGameScreen = () => {
        return (
            <View style={styles.gameScreenContainer}>
                <Icon 
                    name="home-export-outline"
                    size={40}
                    style={styles.homeIcon}
                    onPress={backStartScreen}
                
                />
                <Text style={styles.team}>TEAM {teams[turn].name}</Text>
                <View style={{flex:1,}}>
                    <View style={styles.timerContainer}>
                            <Icon 
                                name="timer-outline"
                                size={30}
                                style={styles.timerIcon}
                            />
                            <Text style={styles.timer}>{timer}</Text>
                    </View>

                    <TabooCard 
                        word={shownWord.word}
                        taboos={shownWord.tabu}
                    />

                    <Text style={styles.score}>{teams[turn].score}</Text>
                </View>
            
                <View style={styles.gameButtonContainer}>
                    <GameButton 
                        styleWrapper={styles.gameButtonIconWrapper}
                        icon={'close-circle-outline'}
                        iconSize={60}
                        iconStyle={{color:'#993366'}}
                        onPress={wrongAnswer}

                    />

                    <GameButton 
                        styleWrapper={styles.gameButtonTextWrapper}
                        styleContainer={styles.gameButtonTextContainer}
                        text={'PASS'}
                        textStyle={styles.gameButtonText}
                        onPress={pickRandomWord}
                    />

                    <GameButton 
                        styleWrapper={styles.gameButtonIconWrapper}
                        icon={'check-circle-outline'}
                        iconSize={60}
                        iconStyle={{color:'#1f7a1f'}}
                        onPress={correctAnswer}

                    />
                </View>
        </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            
            {
                startFlag ?
                <>
                    {renderBreakModal()}
                    {renderEndOfGameModal()}
                    {renderGameScreen()}
                </>
                :
                <>
                    {renderRulesModal()}
                    {renderSettingsModal()}
                    {renderStartScreen()}

                </>

            }
        </SafeAreaView>
    )
}

export default Home;
