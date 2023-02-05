import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { validateEmail } from "../utils";

const Onboarding = () => {
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState("");

  const isValidInput = () => {
    return validateEmail(email) != null && !/[^a-zA-Z]/.test(firstName);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} keyboardDismissMode="on-drag">
          <View style={styles.headerContainer}>
            <Image
              style={styles.logo}
              source={require("../assets/images/Logo.png")}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.title}>Let us get to know you</Text>
            <View style={styles.inputHolder}>
              <View style={styles.inputEle}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  style={styles.input}
                  clearButtonMode="always"
                  value={firstName}
                  onChangeText={setFirstName}
                  keyboardType="default"
                />
              </View>
              <View style={styles.inputEle}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  clearButtonMode="always"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Pressable
              style={[
                styles.button,
                isValidInput()
                  ? { backgroundColor: "#CBD9D2" }
                  : { backgroundColor: "gray" },
              ]}
              onPress={() => Alert.alert(`${firstName}: ${email}`)}
              disabled={!isValidInput()}
            >
              <Text style={styles.buttonTxt}>Next</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE3E9",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#DEE3E9",
    alignItems: "center",
    padding: 40,
    paddingTop: 90,
  },
  logo: {
    width: "100%",
    height: 70,
    resizeMode: "contain",
  },
  form: {
    width: "100%",
    backgroundColor: "#CBD9D2",
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginTop: 40,
    fontSize: 25,
    color: "#333333",
  },
  inputHolder: {
    marginTop: 130,
    width: "100%",
  },
  inputLabel: {
    fontSize: 25,
    color: "#333333",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 60,
    fontSize: 25,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#333333",
    borderRadius: 15,
  },
  inputEle: {
    alignItems: "center",
    marginBottom: 20,
  },
  footer: {
    width: "100%",
    padding: 30,
    alignItems: "flex-end",
  },
  button: {
    width: "40%",
    alignItems: "center",
    backgroundColor: "#CBD9D2",
    paddingHorizontal: 40,
    padding: 15,
    borderRadius: 10,
  },
  buttonTxt: {
    fontSize: 25,
  },
});
