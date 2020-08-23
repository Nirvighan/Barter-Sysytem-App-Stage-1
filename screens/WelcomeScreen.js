import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Alert,TextInput } from 'react-native';
import db from '../Config';
import firebase from 'firebase';



export default class WelcomeScreen extends React.Component{
   
   constructor()
   {
       super();
       this.state = {
           email:'',
           password:''
       }
   }

   UserLogin = (email,password) => {
       firebase.auth().signInWithEmailAndPassword(email,password).then(() => {
        return Alert.alert("User login successfully");
       })

       .catch((function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        return Alert.alert(errorMessage);
    }))
   }

   UserSignUp = (email,password) => {
    firebase.auth().createUserWithEmailAndPassword(email,password).then((response) => {
     return Alert.alert("User added successfully");
    })

    .catch((function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
    }))
}


    render(){
        return(
            <View style = {styles.container}>
               <View style = {styles.headingContainer}>
                   <Text style = {styles.heading}>Welcome to Barter System App</Text>
                   </View> 
                   <View style = {styles.verifyingContainer}>
                     <TextInput
                       style = {styles.loginBox}
                       placeholder = 'enter email Id'
                       keyboardType = "email-address"
                       onChangeText = {(text) => {
                           this.setState({
                               email:text
                           })
                       }}
                     />
                     <TextInput
                       style = {styles.loginBox}
                       placeholder = 'enter password'
                       secureTextEntry = {true}
                       onChangeText = {(text) => {
                           this.setState({
                               password:text
                           })
                       }}
                     />

                     <TouchableOpacity
                       style  = {styles.button}
                       onPress = {() => {
                           this.UserLogin(this.state.email,this.state.password);
                       }}
                     >
                         <Text style = {styles.buttonText}>LOGIN</Text>
                     </TouchableOpacity>

                     <TouchableOpacity
                       style  = {styles.button}
                       onPress = {() => {
                           this.UserSignUp(this.state.email,this.state.password);
                       }}
                     >
                         <Text style = {styles.buttonText}>SIGN UP</Text>
                     </TouchableOpacity>
                   </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#4A148C',
      width:'100%',
      height:'100%'
    },
    headingContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'40%'
    },
    heading :{
      fontSize:65,
      fontWeight:'300',
      
      color : '#fff'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#fff',
      fontSize: 20,
      alignSelf:'center'
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      borderRadius:25,
      backgroundColor:"#fff",
      marginTop:20,
      shadowColor: "#ffffff",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.40,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#4A148C',
      fontWeight:'bold',
      fontSize:20
    },
    verifiyingContainer:{
      flex:1,
      alignItems:'center'
    }
  })