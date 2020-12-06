import React from 'react';
import { StyleSheet, Button,TextInput, View, Text } from 'react-native';
import * as yup from 'yup'
import { Formik} from 'formik';

const validate = yup.object({
  name: yup.string()
    .required()
    .min(4),
  review: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewModalForm({submit}) {


return(
    
        <Formik
        initialValues={{ name: '', review: '', rating: '' }}
        onSubmit={(values) => {
          submit(values)
        }}
        validationSchema={validate}
      >
        {props => (
          <View>
            <TextInput
              style={Styles.input}
              placeholder="Reviewer name"
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={Styles.error}>{props.errors.name}</Text>

            <TextInput
              style={Styles.input}
              multiline
              placeholder='Review details'
              onChangeText={props.handleChange('review')}
              value={props.values.review}
            />
            <Text style={Styles.error}>{props.errors.review}</Text>
            <TextInput 
              style={Styles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Text style={Styles.error}>{props.errors.rating}</Text>
            <View style={Styles.Buttonview}>
                <Text  style={Styles.btntext}onPress={props.handleSubmit} >Submit</Text> 
            </View>
          </View>
        )}
      </Formik>
    
)
}
const Styles=StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  
    alignItems:"flex-start"
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    color:'black',
    borderRadius: 6,
    backgroundColor:'white',
    margin:5,
  },
  inputmulti:{
       borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    color:'black',
    borderRadius: 6,
    backgroundColor:'white',
      height:100,
      paddingBottom:50,
      margin:5,
      
  },
  Buttonview:{
    paddingHorizontal:75,
    paddingVertical:10,
      marginHorizontal:80,
      marginVertical:15,
      backgroundColor:'pink',
      borderRadius:8,
     
  },
  error:{
      color:'crimson'
  },
  btntext:{
      fontSize:20,
      color:'white',
      textAlign:'center'
  }


})