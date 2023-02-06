import { StyleSheet, Button, Text, View } from "react-native";

export default function SecondPage({ navigation, route }) {
  let text = route.params.text;
  return (
    <View style={styles.container}>
      <Text>Druga stranica {text ? text : "NEMA UPISANOG"}</Text>
      <Button
        onPress={() => navigation.navigate("Home", {})}
        title="Press Me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
