import {
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function SecondPage({ navigation }) {
  let [input, setInput] = useState({ kuna: 0, euro: 0 });

  function onChangeEur(enterdText) {
    if (enterdText != "") {
      setInput({
        kuna: (parseInt(enterdText) / 7.5345).toFixed(2),
        euro: enterdText,
      });
    } else {
      setInput({
        kuna: 0,
        euro: enterdText,
      });
    }
  }
  function onChangeKn(enterdText) {
    if (enterdText != "") {
      setInput({
        kuna: enterdText,
        euro: (parseInt(enterdText) * 7.5345).toFixed(2),
      });
    } else {
      setInput({
        kuna: 0,
        euro: enterdText,
      });
    }
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <SafeAreaView style={styles.inputBorder}>
          <TextInput
            style={styles.marko}
            keyboardType="number-pad"
            onChangeText={onChangeKn}
            value={input.kuna ? input.kuna : ""}
            placeholder="0"
          />
          <Text style={{ fontSize: 30 }}>EUR</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.inputBorder}>
          <TextInput
            style={styles.marko}
            keyboardType="number-pad"
            onChangeText={onChangeEur}
            value={input.euro ? input.euro : ""}
            placeholder="0"
          />
          <Text style={{ fontSize: 30 }}>KN </Text>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBorder: {
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
  },
  marko: {
    height: 40,
    width: 180,
    fontSize: 30,
  },
  container: {
    flex: 1,
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
