import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import Home from '../Screens/Home'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function Header({navigationtoHome,screenName}) {
  if(screenName=='home'){
        return(
        
            <View style={styles.container}>
           
            <Text style={styles.textheader}>Home</Text>
           
            </View>

    )
  }
  else{
    return(
        
            <View style={styles.container}>
            <Ionicons style={styles.icon} name="ios-arrow-round-back" size={44} color="black" 
            onPress={navigationtoHome}
            />
             <Text >{screenName}</Text>
            </View>
  
    )
}
  
}
const styles = StyleSheet.create({
  container: {
    
    width:500,
    height:70,
    flexDirection:'row',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical:45,
  },
  icon:{
      marginHorizontal:25,
  },
  textheader:{
      marginLeft:34,
  }

});
