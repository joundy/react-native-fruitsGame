import React, {Component} from 'react'
import {StyleSheet, Image} from 'react-native'
import {Container, Button, Text} from 'native-base'

export default class Main extends Component{
    render(){
        return(
            <Container style={styles.wrapper.container}>
                <Container style={styles.header.container}>
                    <Image source={require('../assets/images/logo.png')} resizeMode='contain' style={styles.header.logo}/>
                    <Text style={styles.header.textMain}>Fruits</Text>
                    <Text style={styles.header.textChild}>React Native Game</Text>
                </Container>
                <Container style={styles.main.container}>
                    <Button rounded style={styles.main.button} onPress={()=>this.props.navigation.navigate('Start')}>
                        <Text style={styles.main.buttonText}>Start</Text>
                    </Button>
                    <Button rounded style={styles.main.button} onPress={()=>this.props.navigation.navigate('About')}>
                        <Text style={styles.main.buttonText}>About</Text>
                    </Button>
                </Container>
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
        logo: {
            width: 100,
            height: 100
        },
        textMain: {
            fontSize: 40,
            color:'white'
        },
        textChild:{
            color: 'white'
        }
    }),
    main: StyleSheet.create({
        container :{
            alignItems: 'center',
            justifyContent: 'center'
        },
        button: {
            width:200,
            justifyContent:'center',
            margin:5,
            backgroundColor: '#ff4961',
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation:0,
            alignSelf: 'center',
        }
    })
}