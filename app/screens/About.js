import React, {Component} from 'react'
import {StyleSheet, TouchableNativeFeedback} from 'react-native'
import {Container, Text, View, Icon} from 'native-base'

export default class About extends Component{
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
                    <Text style={styles.header.textMain}>About</Text>
                </Container>
                <Container style={styles.main.container}>
                    <View style={styles.main.about}>
                        <Text note>created by</Text>
                        <Text>Hafiz Joundy Syafie</Text>
                        <Text note>github</Text>
                        <Text>github.com/haffjjj</Text>
                    </View>
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
            fontSize: 40,
            color:'white'
        }
    }),
    main: StyleSheet.create({
        container :{
            alignItems: 'center',
            // justifyContent: 'center'
        },
        about: {
            width: 250,
            borderRadius: 20,
            backgroundColor: 'white',
            padding: 10,
            alignItems: 'center',
        }
    })
}