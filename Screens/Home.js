import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,FlatList} from 'react-native'


import Reviews from'./Reviews'


export default function Home({navigationtoReviews}) {
    const [reviews, setReviews] = useState([
    { title: 'FIFA', 
    imagesrc: require('../assets/fifa.jpg'),
    body: 'is a football simulation video game that lets you experience more ways to play ball',
    key: '1' ,
    production:'EA'
    },
    { title: 'Call Of Duty',
      imagesrc: require('../assets/callofduty.jpg'),

    body: 'Warzone is a free-to-play battle royale video game released on March 10, 2020',
    key: '2' ,
    production:'Infinity Ward and Raven'
    },
    { title: 'Gta V',
      imagesrc: require('../assets/GTAV.jpg'),
   
    body:'jffggj fjfjggj jfhfjf', 
    key: '3' ,
    production:'Ubi'
    },
  ]);



  return (
    <View style={styles.container}>
      
   
    
      <FlatList
        style={styles.listcontainer}
        data={reviews}
        numColumns={1}
 
        renderItem={({item})=>{
          return(
          <View
         
          style={styles.singlecard}>
            <Text  onPress={()=>{
            navigationtoReviews(<Reviews  game={item}/>,item.title)}}
            style={styles.textlist}>
              {item.title}
            </Text>
          </View>  
          )
        }}
      />
  
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
    modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
    titletext:{
    color:'pink',
    fontSize:20,
    
  },
  button:{
    backgroundColor:'pink',
    padding:20,
    borderRadius:7.5,
    margin:5,
  },
   singlecard:{
     flex:1,
     alignItems:'center',
     elevation:20,
     
    margin:40,
     padding:30,
     borderWidth:2,
     borderRadius:7.5,
     width:250,
     backgroundColor:'pink',

   },
  textlist:{
    color:'white',
    padding:49,
    
  },
});

