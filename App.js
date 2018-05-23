import React,{Component} from 'react'
import {createStackNavigator} from 'react-navigation'

import Main from './app/screens/Main'
import Start from './app/screens/Start'
import About from './app/screens/About'

const ModalNavigator = createStackNavigator(
  {
    Main: {
      screen: Main 
    },    
    Start: {
      screen: Start 
    },   
    About: {
      screen: About 
    },    
  },
  {
    headerMode: 'none'
  }
)

export default ModalNavigator