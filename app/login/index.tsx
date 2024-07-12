import Button from "@/components/Button";
import Label from "@/components/Label";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const onSignIn = () => {
    // Логика за логин рекуест
    console.log(email);
  };
  return (
    <ThemedView style={styles.container} darkColor="lightblue">
      <ThemedText type="subtitle">Вече имате закупен продукт?</ThemedText>
      <ThemedText type="subtitle">Логнете се с имейла си.</ThemedText>
      <Label>Enter email:</Label>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <Button label="Sign in" onPress={onSignIn} />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
