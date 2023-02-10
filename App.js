import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Calculator from "./Screens/Calculator.js";
import GridTest from "./Screens/GridTest.js";
// import React, { useState } from "react";
import Converter from "./Screens/Converter.js";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebase.js";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState();
  //dohvacanje svih kolekcija
  // const getData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "bezveze"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // };
  // const getData = async () => {
  //   // citanje određenog dokumenta
  //   const docRef = doc(db, "users", "admin");
  //   const docSnap = await getDoc(docRef);

  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     setData(docSnapd.data());
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // };

  // getData();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Converter" component={Converter} />
        <Stack.Screen name="GridTest" component={GridTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
