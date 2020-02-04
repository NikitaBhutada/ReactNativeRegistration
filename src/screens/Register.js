import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View , Text , StyleSheet ,   TouchableHighlight ,TextInput, Button, Alert}  from 'react-native';
import RegisterUserProfile from '../actions/LoginAction';

const Register = ({navigation}) => {


 const [fullname,setfullname] = useState('');
const [password,setpassword] = useState('');
const [email,setemail] = useState('');

const [mobile,setmobile] = useState('');

const [confirmpassword,setconfirmpassword] = useState('');

const dispatch= useDispatch();
const currentUser = {
    fullname : fullname,
    password: password,
    email: email,
    mobile: mobile,
    confirmpassword : confirmpassword
}
const validatePassword = () => {
  if(password==confirmpassword)
   navigation.navigate('Login');
   else
   Alert.alert("Passwords do not match" );
 };

return (

<View style={styles.container}>
<View style={styles.inputContainer}>

  <TextInput onChangeText= {(text)=>setfullname(text)} value={fullname}  style={styles.inputs}
      placeholder="Full Name"
    />
</View>

<View style={styles.inputContainer}>
    <TextInput  style={styles.inputs}  onChangeText= {(text)=>setemail(text)} value={email}  style={styles.inputs}
      placeholder="Email"
  
     />
</View>

<View style={styles.inputContainer}>
    <TextInput  style={styles.inputs}  onChangeText= {(text)=>setmobile(text)} value={mobile}  style={styles.inputs}
      placeholder="Mobile Number"
    
     />
</View>

<View style={styles.inputContainer}>
    <TextInput  style={styles.inputs} 
     onChangeText= {(text)=>setpassword(text)}
      value={password}  
      style={styles.inputs}
      placeholder="Password"
     
     />
</View>

<View style={styles.inputContainer}>
    <TextInput  style={styles.inputs} 
    value={confirmpassword}
    onChangeText= {(text)=>setconfirmpassword(text)}
      placeholder="Confirm Password"
    />
</View>


<View>
<Button style={[styles.buttonContainer, styles.loginButton]} onPress={() => 
        dispatch(RegisterUserProfile(currentUser), validatePassword()) }
         title="Register" > 
          Register
</Button>
</View>

<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => 
        navigation.navigate('Dashboard')}>
  <Text style={styles.loginText}>Go To Dashboard</Text>
</TouchableHighlight>


</View>
);
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:60,
      width:250,
      borderRadius:30,
      marginTop:50 
     
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
  });
  
  

export default Register;