import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Loginpage = ({ navigation }) => {
  // const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate('Homepage');
  };

  const handleSignUp = () => {
    
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login or Sign Up</Text>
      <Text style={{ color: 'white' }}>User Id</Text>
      <TextInput
        style={styles.input}
        placeholder="User ID"
      />
      <Text style={{ color: 'white' }}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="blue"
        secureTextEntry={true} 
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupLink}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderWidth: 3,
    borderRadius:8,
    padding: 10,
    marginBottom: 20,
  },
  signupLink: {
    marginTop: 10,
    color: '#007bff',
  },
});

export default Loginpage;

