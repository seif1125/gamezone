import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View ,ImageBackground ,TouchableWithoutFeedback ,Keyboard} from 'react-native';
import Home from'./Screens/Home'
import Header from './Shared/Header'
export default function App() {
  
   const navigateToReviews=(component,gameName)=>{
  console.log('lll');
      setScreenComponent(()=>{
        return(component)
      })
      setcurrentScreenName(gameName+" review")

   } ;
      const navigateToHome=(component)=>{
  console.log('llljkjkj');
  setcurrentScreenName("home")
      setScreenComponent(
       ()=>{return(<Home navigationtoReviews={navigateToReviews}/>)}
      )

      

   } 
   const [screenComponent,setScreenComponent]=useState(<Home navigationtoReviews={navigateToReviews}/>)
   const [currentScreenName,setcurrentScreenName]=useState('Home')
  return (
    <TouchableWithoutFeedback onPress={()=>{
      console.log("diss")
      Keyboard.dismiss()}}>
      <ImageBackground style={styles.container} source={require('./assets/bck.jpg')}>
      <Header screenName={currentScreenName} navigationtoHome={navigateToHome}/>
     {screenComponent}
     </ImageBackground>
  </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
