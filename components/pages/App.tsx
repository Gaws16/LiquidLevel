import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Navigator } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button";
import { HelloWave } from "@/components/HelloWave";
const logo = require("../../assets/images/react-logo.png");
export default function App() {
  return (
    <ThemedView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <ThemedText type="title">Wellcome page</ThemedText>
      <HelloWave />
      <Link href="/home" push asChild>
        <Button label="Wellcome" />
      </Link>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
