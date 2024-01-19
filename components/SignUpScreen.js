import React, { useState } from 'react';
import { View, Text, TextInput, Pressable,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');

  const handleSignUp = async () => {
    const userData = { username, password, role };
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
    console.log(role);
    navigation.navigate('Login');
  };

  return (
    <View>
    <View><Text style={{fontSize:40,marginLeft:140,marginTop:60,}}>SignUp</Text></View>
    <View style={styles.vi}>
      
      <View style={styles.vie}>
      <Text style={styles.text}>Username</Text>
      
      <TextInput
      style={styles.input}
      name="Username"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
      <View style={styles.vie}>
      <Text style={styles.text}>Password</Text>
      <TextInput
      style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      </View>
      <View style={styles.vie}>
            <Text style={styles.text}>User Type</Text>

       <Picker
       style={styles.input}
        selectedValue={role}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item style={styles.pick} label="Buyer" value="buyer" />
        <Picker.Item style={styles.pick} label="Seller" value="seller" />
      </Picker>
      </View>
      <Pressable style={styles.but}  onPress={handleSignUp} >
      <Text style={{color:"white"}}>Sign Up</Text>
      </Pressable>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 250,
    marginRight: 30,
    backgroundColor: "#fff",
  },
  text:{
    marginLeft:10,
    marginTop:10,
    alignItems:"center",
  },
  but:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width:80,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft:160,
    marginTop:20,
    fontSize:50,
    backgroundColor: 'black',
    color:"black",
  },
  pick:{
    fontSize: 15,
  },
  vi:{
    marginTop:50,
    backgroundColor:'lightgreen',
    width:400,
    height:1000,
  },
  vie:{
    flex:0,
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:10,
  }
});
export default SignUpScreen;
