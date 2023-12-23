import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class SplashScreen extends Component {
  handleLogin = () => {
    // Navigate to the Login screen
    this.props.navigation.navigate("login");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Your existing code here */}
        <Text style={styles.text}>
          {"\n"}
          Bank EC
          {"\n"}
          Bank, Finance Kit
        </Text>
        <TouchableOpacity onPress={this.handleLogin}>
          <Text style={{ color: 'white' }}>Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SplashScreen;
