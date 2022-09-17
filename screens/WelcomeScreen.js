import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import axios from "axios";

function WelcomeScreen({ navigation }) {
  const [message, setMessage] = useState("");
  const ctx = useContext(AuthContext);
  const token = ctx.token;
  useEffect(() => {
    let url =
      "https://expo-firebase-6aeda-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
      token;
    axios.get(url).then((res) => {
      console.log(res.data);
      setMessage(res.data);
    });
  }, [token]);
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>{message}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
