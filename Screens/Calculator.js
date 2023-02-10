import { db } from "../Firebase/firebase.js";
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Home({ navigation }) {
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

  const [result, setResoult] = useState();
  const [view, setView] = useState("");

  function HandleTap(enterdText) {
    setView(view + enterdText);
  }

  function HandleResult() {
    let rez = evaluate(view);
    setResoult(rez);
  }

  function HandleClear() {
    setResoult("");
    setView("");
  }

  return (
    <View style={styles.container}>
      <Button
        title="Go to Converter"
        onPress={() => navigation.navigate("Converter")}
      />
      <Button
        title="Go to gridTest"
        onPress={() => navigation.navigate("GridTest")}
      />
      <SafeAreaView>
        <Text style={styles.value}>{view}</Text>

        <View style={styles.stupac}>
          <TouchableOpacity onPress={() => HandleClear()}>
            <Text>My button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: "100%",
              marginTop: 10,
              backgroundColor: "red",
            }}
            onPress={() => HandleClear()}
          >
            <Text>My button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: "100%", marginTop: 10, backgroundColor: "red" }}
            onPress={() => HandleClear()}
          >
            <Text>My button</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: "100%", marginTop: 10, backgroundColor: "red" }}
            onPress={() => HandleClear()}
          >
            <Text>My button</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.value}>{result}</Text>
        <View style={styles.stupac}>
          <Button title="C" onPress={() => HandleClear()} />
          <Button title="+/-" onPress={() => HandleTap(6)} />
          <Button title="%" onPress={() => HandleTap("%")} />
          <Button title="/" onPress={() => HandleTap("/")} />
        </View>

        {/* Number */}
        <View style={styles.stupac}>
          <Button title="7" onPress={() => HandleTap(7)} />
          <Button title="8" onPress={() => HandleTap(8)} />
          <Button title="9" onPress={() => HandleTap(9)} />
          <Button title="X" onPress={() => HandleTap("*")} />
        </View>

        <View style={styles.stupac}>
          <Button title="5" onPress={() => HandleTap(5)} />
          <Button title="6" onPress={() => HandleTap(6)} />
          <Button title="4" onPress={() => HandleTap(4)} />
          <Button title="-" onPress={() => HandleTap("-")} />
        </View>

        <View style={styles.stupac}>
          <Button title="1" onPress={() => HandleTap(1)} />
          <Button title="2" onPress={() => HandleTap(2)} />
          <Button title="3" onPress={() => HandleTap(3)} />
          <Button title="+" onPress={() => HandleTap("+")} />
        </View>

        <View style={styles.stupac}>
          <Button title="0" onPress={() => HandleTap(0)} />
          <Button title="." onPress={() => HandleTap(".")} />
          <Button title="=" onPress={() => HandleResult()} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "center",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    titleAlign: "right",
    marginRight: 30,
    marginBottom: 20,
  },
  stupac: {
    flexDirection: "row",
    padnig: 5,
    justifyContent: "space-between",
  },
});
