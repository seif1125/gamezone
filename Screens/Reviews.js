
import React ,{useState}from 'react';
import ReviewModal from '../ReviewModal'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View,Image,FlatList} from 'react-native';
export default function Reviews({game}) {
  const [modalOpen,setModalOpen]=useState(false);
  
  const [reviews,setReviews]=useState([
    {game:"FIFA",name:"seif" ,review:"good ffghfg of passages '",rating:"5",time:"25-11-2020 15:33"},
    { game:'Gta V',name:"seif" ,review:'ok',rating:"5",time:"25-11-2020 15:32"}
  
  ])
  
 const closeModal=()=>{
    setModalOpen(false)
  }

  const getReviewsof=()=>{
    return(
      reviews.filter(reviews=>reviews.game===game.title)

    )
  }
  const getGameRating=()=>{
     var totalratings=0;
     var totalreviews=reviews.filter(reviews=>reviews.game===game.title).length


     for(let x=0;x<totalreviews;x++){
        totalratings=Math.floor(totalratings)+ Math.floor(reviews[x].rating)
        console.log(totalratings)
     }
     console.log(totalratings/totalreviews)
     return(Math.floor(totalratings/totalreviews))
     
  }
 
  const AddReview=(values)=>{
    console.log("done")
    values.time=new Date().toString().substring(0,21)
    values.game=game.title
    setReviews((currentReviews)=>{
      return([values,...currentReviews])

    })
    setModalOpen(false)
    
  }
  
const Ratings=[
require('../assets/rating1.png'),
require('../assets/rating-2.png'),
require('../assets/rating-3.png'),
require('../assets/rating-4.png'),
require('../assets/rating-5.png')
]

  return (
    <View style={Styles.container}> 
    <ReviewModal addreview={AddReview} closeModal={closeModal} shown={modalOpen}/>
   <Image source={game.imagesrc } style={Styles.imagecover}>
   </Image>  
   <Text style={Styles.titletext}>{game.title}</Text>
   <Text style={Styles.tetxtDetail}>{game.body}  </Text>
   <View style={Styles.subDetails}>
     <Text style={Styles.subtext}>
       production: {game.production}
     </Text>
     <Text style={Styles.subtext}>
       Rating: 
     <Image style={Styles.subimage} source={Ratings[getGameRating()-1]}>
    
     </Image>
     </Text>
        
   </View>
    

      <Text style={Styles.reviewslistheader}>Reviews</Text>
       <View style={Styles.Buttonview}  >
       <Text style={Styles.buttontext}onPress={()=>setModalOpen(true)}>Add new Review </Text>
       </View>

     
      <FlatList
    
      style={Styles.list}
        keyExtractor={(item) => item.time}
      data={getReviewsof()}
      renderItem={(
        ({item})=>{
          
         return(
           <View style={Styles.reviewstyle}>
           <Text style={Styles.reviewtext}>{item.name}</Text>
         <View style={Styles.bodycontainer}>
         <Text style={Styles.reviewbody}>{item.review}</Text>
        <Image style={Styles.subimage} source={Ratings[item.rating-1]}></Image>
         </View>
         <Text style={Styles.posttime}>posted: {item.time}</Text>
           </View>
         )
        
      }
      
      )}/>
      
    

       
 
        
     

      
      

    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
   
  },
   list:{
    
    borderWidth:1,
    marginTop:15,
    backgroundColor:'pink'
  },

  titletext:{
    color:'pink',
    fontSize:20,
    margin:15,
  },
  button:{
    backgroundColor:'pink',
     padding:20,
    borderRadius:7.5,
    margin:5,
  },
  imagecover:{
    width:200,
    height:200,
    borderRadius:7.5,
  },
  tetxtDetail:{
    padding:20,
    backgroundColor:'pink',
    
  },
  subDetails:{
   margin:5,
   width:400,
   padding:5,
   flex:0.1,
   flexDirection:'row',
    borderWidth:3,
    borderColor:'pink',
    alignItems:'center',
    justifyContent:'space-around'
    
  },
  subtext:{
    color:'pink'
  },
  reviewslistheader:{
  color:'pink',
  fontSize:25,
  marginVertical:15,
  },
  Buttonview:{
    backgroundColor:'black',
    margin:5,
     borderWidth:0.5,
       borderColor:'grey',
        borderRadius:7,
      
   
  },
  buttontext:{
    color:'pink',
    fontSize:20,
    padding:7,
  
  },
  list:{
   flex:1,
   borderWidth:3,
   borderColor:'pink',
   backgroundColor:'pink',
   
   borderRadius:7.5,
  },
  reviewstyle:{
   borderRadius:7.5,
     backgroundColor:'black',
     marginVertical:7,
     alignItems:'flex-start',
     padding:5,
  },
  reviewtext:{
    color:'pink',
    fontSize:25,
     fontWeight:'bold',
     paddingBottom:10,

    
  },
  bodycontainer:{
    flex:1,
    flexDirection:'row',
    borderColor:'pink',
    justifyContent:'flex-start',
    alignItems:'flex-end',
    borderStyle:'dashed',
    borderWidth:2,
    padding:10,
    
  },

  reviewbody:{
    fontSize:15,
    color:'pink',
    width:250,

  },
  posttime:{
    color:'grey',
    fontSize:14,
    marginLeft:170,
    marginVertical:7,
  },



});

