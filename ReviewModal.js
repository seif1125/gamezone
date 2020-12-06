import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from'./Shared/Header'
import ReviewModalForm from './ReviewModalForm'
export default function ReviewModal({addreview,shown,closeModal}) {


    return(

     
        <Modal visible={shown} animationType='fade'>
            <ImageBackground style={Styles.modalContent} source={require('./assets/bck.jpg')}>
             <Header screenName='review' navigationtoHome={closeModal} />
             <View style={Styles.modalContainer}>
                <Text style={Styles.modaltext} > Review Form</Text>
               
                 <ReviewModalForm submit={addreview}/>
            </View> 
             </ImageBackground>   
      </Modal>
     

    );

}
const Styles=StyleSheet.create({

  modalContent: {
      flex:1,
      justifyContent:'flex-start',
      

 
  },
  modalContainer:{
    paddingHorizontal:10,
    paddingVertical:15,
    borderWidth:3,
    borderColor:'pink',
    borderRadius:7.5,
    marginTop:45,
   

  },
  modaltext:{
      color:'pink',
      fontSize:20,
      margin:2,
  }
}
  );