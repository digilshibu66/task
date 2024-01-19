import React,{ useState ,useEffect} from 'react';
import { View, Text, Pressable ,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen =  ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUserData = await AsyncStorage.getItem('userData');
        if (storedUserData) {
          const userData = JSON.parse(storedUserData);
          console.log(userData.username);
          setUsername(userData.username);
          setRole(userData.role);
        }
      } catch (error) {
        console.error('Error fetching username from AsyncStorage:', error);
      }
    };

    fetchUsername();
  }, []);

  const handleLogout = () => {
    navigation.navigate('SignUp');

  };
 

  return (
    <View style={styles.vi} >
      <Text style={styles.vie}>Welcome to Home Screen</Text>
      <Text style={styles.user}>{username}</Text>
      <Text style={styles.vie}>as</Text>
      <Text style={styles.role}>{role}</Text>
      <Pressable style={styles.but}  onPress={handleLogout} >
      <Text style={{color:"white"}}>Logout</Text>
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
    marginTop:300,
  },
  vie:{
    marginLeft:10,
    textAlign:"center",
    fontStyle:"normal",
    fontSize:20,
  },
  user:{
    fontFamily:'Roboto',
    fontSize:50,
    color:'blue',
    textAlign:'center',
    marginLeft:10,
  },
  role:{
    marginLeft:10,
    textAlign:'center',
    fontSize:40,
  }
});

export default HomeScreen;
