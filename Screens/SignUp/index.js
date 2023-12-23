// SignupScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = ({navigation})=>{
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState('');
  const [passwordVisibility] = useState(true);
  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Mật khẩu phải có ít nhất 6 ký tự');
      return;
    }
    navigation.navigate("login");
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate("login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      <TouchableOpacity style={styles.signupButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    backgroundColor : "#5AA5E2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    width: 300,
    backgroundColor : "white",
  },
  signupButton: {
    backgroundColor: "#5AA5E2",
    padding: 15,
    borderRadius: 5,
    width: 300,
    alignItems: "center",
    marginVertical: 10,
    borderWidth:2,
    width: 210, 
    height: 55, 
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    marginTop: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;
