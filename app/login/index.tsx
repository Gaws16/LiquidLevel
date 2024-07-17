import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onSignIn = () => {
    // Логика за логин рекуест
    console.log(email);
  };
  return (
    <ThemedView style={styles.container}>
      <Text
        style={styles.title}
        variant="displayMedium"
        theme={{ colors: { primary: "green" } }}
      >
        Вече имате закупен продукт?
      </Text>
      <Text style={styles.title} variant="displayMedium">
        Логнете се!
      </Text>
      <TextInput
        value={email}
        onChangeText={(email) => setEmail(email)}
        label="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword(password)}
        label="Password"
        secureTextEntry
        style={styles.input}
      />
      <Button icon="login" mode="elevated" loading={false} onPress={onSignIn}>
        Логни се
      </Button>
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
  title: {
    color: "white",
  },
});
