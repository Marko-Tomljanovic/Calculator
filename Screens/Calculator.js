import React, { useState, useEffect } from "react";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase.js";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from "react-native";

export default function Home({ navigation }) {
  let [input, setInput] = useState({ kuna: 0, euro: 0 });
  //   let dataX;
  //   const getData = async () => {
  //     // citanje određenog dokumenta
  //     const docRef = doc(db, "users", "admin");
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       console.log("Document data:", docSnap.data());
  //       dataX = docSnap.data();
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //     setData([(data = dataX)]);
  //     console.log("setData", data);
  //   };
  //   useEffect(() => {
  //     getData();
  //   }, []);

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
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderColor: "red",
        }}
      >
        <SafeAreaView style={styles.inputBorder}>
          <TextInput
            style={styles.marko}
            keyboardType="number-pad"
            onChangeText={onChangeKn}
            value={input.kuna ? input.kuna : ""}
            placeholder="KN"
          />
          <Text style={styles.marko}>KN</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.inputBorder}>
          <TextInput
            style={styles.marko}
            keyboardType="number-pad"
            onChangeText={onChangeEur}
            value={input.euro ? input.euro : ""}
            placeholder="EUR"
          />
          {/* <Text style={styles.marko}>EUR </Text> */}
        </SafeAreaView>
      </View>
      <View style={styles.container}>
        <Text>Marko</Text>
        <Text>Marko</Text>
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
  textStyle: {},
  marko: {
    height: 40,
    width: 180,
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
  },
});
