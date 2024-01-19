import React, { useState } from 'react';
import { View, Text, TextInput, Pressable ,StyleSheet,ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const storedUserData = await AsyncStorage.getItem('userData');
    const userData = JSON.parse(storedUserData);

    if (userData && userData.username === username && userData.password === password) {
      navigation.navigate('Home');
    } else {
      ToastAndroid.show('Incorrect Username Or Password', ToastAndroid.SHORT);
      //console.log('Incorrect credentials');
    }
  };

  return (
    
    <View style={styles.vi}>

      <Text style={{fontSize:30,marginLeft:100,marginBottom:20,}}>Login Screen</Text>
      <View style={styles.vie}>
      <TextInput
      style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      </View>
      <TextInput
      style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
     <Pressable style={styles.but}  onPress={handleLogin} >
      <Text style={{color:"white"}}>Login</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    marginLeft: 50,
    marginRight:20,
    backgroundColor: "#fff",
  },
  vi:{
    marginTop:250,
  },
  but:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width:80,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginLeft:160,
    marginTop:11,
    fontSize:50,
    backgroundColor: 'black',
    color:"black",
  },
  vie:{
    marginBottom:20,
   
  }
});

export default LoginScreen;
