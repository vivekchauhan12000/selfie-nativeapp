import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

export default class Home extends React.Component {
  static navigationOption = {
    title: "PhotoClicker"
  };

  render() {
    let photo = this.props.navigation.getParam("photo", "empty");

    return (
      <View style={styles.container}>
        <Image
          resizeMode="center"
          style={styles.imageHolder}
          source={photo === "empty" ? require("../assets/email.jpg") : photo}
        />
        <Button
          title="Take Photo"
          color="#FF0004"
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Camera");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0004",
    alignItems: "center",
    justifyContent: "center"
  },
  imageHolder: {
    alignSelf: "center",
    height: 500,
    margin: 10
  },
  button: {
    margin:1
    
  }
});