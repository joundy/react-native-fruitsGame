import React, {Component} from 'react'
import {StyleSheet, Image, ActivityIndicator, TouchableNativeFeedback} from 'react-native'
import {Container, Icon,Button, Text, View} from 'native-base'
import Voice from 'react-native-voice';

import fruits from '../assets/fruits/fruits'

export default class Start extends Component{

    constructor(props) {
        super()
        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    state = {
        voice: {
            onSpeechStartHandler: {
                error: null
            },
            onSpeechEndHandler: {
                error: null
            },
            onSpeechResultsHandler: {
                value: [
                    '...'
                ]
            }
        },
        fruit: {
            name: '',
        }
    }

    componentDidMount = ()=>{
        this.handleRandom()
    }

    handleRandom = ()=>{
        this.setState({
            fruit: fruits[Math.floor(Math.random()*fruits.length)]
        })
        this.handleReset()
    }

    handleReset = ()=>{
        this.setState({
            voice: {
                ...this.state.voice,
                onSpeechStartHandler: {
                    error: null
                },
                onSpeechEndHandler: {
                    error: null
                },
                onSpeechResultsHandler: {
                    value: [
                        '...'
                    ]
                }
            }
        })
    }

    onStartButtonPress(e){
        Voice.start('en-US');
    }

    onSpeechStartHandler = (res)=>{
        this.setState({
            voice: {
                ...this.state.voice,
                onSpeechStartHandler: res
            }
        })
    }

    onSpeechEndHandler = (res)=>{
        if(res.error == false){
            this.handleReset()
        } 

    }

    onSpeechResultsHandler = (res)=>{
        this.setState({
            voice: {
                ...this.state.voice,
                onSpeechResultsHandler: res
            }
        })
    }

    render(){
        return(
            <Container style={styles.wrapper.container}>
                
                <Container style={styles.header.container}>
                    <TouchableNativeFeedback
                        onPress={()=>this.props.navigation.goBack()}
                        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
                        <View style={styles.header.buttonBack}>
                            <Icon style={styles.header.buttonBackIcon} name='ios-arrow-back'/>
                        </View>
                    </TouchableNativeFeedback>
                    <Text style={styles.header.textMain}>What fruit is this?</Text>
                </Container>
                <Container style={styles.fruit.container}>
                    <View style={styles.fruit.circle}>
                        <Image style={styles.fruit.image} source={this.state.fruit.image} resizeMode='contain'/>
                    </View>
                    <View style={styles.fruit.resultContainer}>
                        <View style={styles.fruit.nameContainer}>
                            <Text>{this.state.voice.onSpeechResultsHandler.value[0]}</Text>
                        </View>
                        <View style={styles.fruit.iconResult}>
                            {this.state.voice.onSpeechResultsHandler.value[0].toLowerCase() == this.state.fruit.name.toLowerCase() ? (
                                <Icon style={{color:'#1ccc4e'}} name='md-checkmark'/>
                                
                            ):
                                this.state.voice.onSpeechResultsHandler.value[0] !== '...' ?(
                                    <Icon style={{color:'#cc1b24'}} name='md-close'/>
                                ):null
                            }
                        </View>
                    </View>
                </Container>
                <Container style={styles.main.container}>
                    <Button rounded style={styles.main.buttonSpeak} iconRight onPress={this.onStartButtonPress}>
                        <Text>Speak</Text>
                        {this.state.voice.onSpeechStartHandler.error == false && this.state.voice.onSpeechEndHandler.error == null ? (
                            <ActivityIndicator size="small" color="white" />
                        ): null}
                    </Button>
                    <Button rounded style={styles.main.buttonReload} iconRight onPress={this.handleRandom}>
                        <Text>Reload</Text>
                    </Button>
                </Container>
                {/* <Text>{JSON.stringify(this.state)}</Text> */}
            </Container>
        )
    }
}

const styles = {
    wrapper: StyleSheet.create({
        container: {
            backgroundColor: '#F23049'
        }
    }),
    header: StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonBack: {
            position:'absolute',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            left:0,
            top:0
        },
        buttonBackIcon: {
            color: 'white'
        },
        textMain: {
            fontSize: 25,
            color:'white'
        }
    }),
    fruit: StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        circle: {
            width: 170,
            height: 170,
            borderRadius: 100,
            backgroundColor: '#ff4961',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            width: 150,
            height: 150
        },
        resultContainer: {
            flexDirection: 'row',
            marginTop: 10,
        },
        nameContainer: {
            backgroundColor: 'white',
            padding: 5,
            width: 120,
            height:40,
            borderRadius: 100,
            margin: 2,
            alignItems: 'center',
            justifyContent: 'center'

        },
        iconResult: {
            backgroundColor: 'white',
            height: 40,
            width: 40,
            margin: 2,
            borderRadius: 100,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }),
    main: StyleSheet.create({
        container :{
            alignItems: 'center',
            justifyContent: 'center'
        },
        buttonSpeak: {
            width:200,
            justifyContent:'center',
            margin:5,
            backgroundColor: '#56CCF2',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation:0,
            alignSelf: 'center',
        },
        buttonReload: {
            width:200,
            justifyContent:'center',
            margin:5,
            backgroundColor: '#ff4961',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation:0,
            alignSelf: 'center',
        },
    })
}