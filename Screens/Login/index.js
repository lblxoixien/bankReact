// LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [passwordVisibility] = useState(true);
  const handleLogin = async () => {
    if (email === 'admin123@gmail.com' && password === '123456') {
      Alert.alert('Đăng nhập thành công!');
      navigation.navigate("home")
      return;
    }
    Alert.alert('Đăng nhập thất bại!');
  };

  const handleSignup = () => {
    // Navigate to the signup screen
    navigation.navigate("signup");
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate("forgotPassword");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELLCOME BANK EC</Text>
      <TextInput
        style={styles.input}
        placeholder="Account"
        placeholderTextColor="#5AA5E2"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#5AA5E2"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop : 50,
    backgroundColor : "#5AA5E2",
  },
  title: {
    fontSize: 27,
    fontWeight: "VnShelley Allegro",
    marginBottom: 100,
    backgroundColor : "#5AA5E2",
    color : "white",
    // borderColor: "black",
    // borderWidth: 5,
    // borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 12,
    marginVertical: 0,
    width: 300,
    marginTop : 10,
    backgroundColor : "white",
  },
  loginButton: {
    backgroundColor: "#5AA5E2",
    color : "black",
    padding: 15,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
    marginVertical: 10,
    borderWidth:2,
    width: 210, 
    height: 55, 
  },
  signupButton: {
    backgroundColor:"#5AA5E2",
    padding: 15,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 2,
    width: 210, 
    height: 55, 
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  forgotPasswordText: {
    marginTop: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
