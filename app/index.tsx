import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";
const logo = require("../assets/images/react-logo.png");
export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <ThemedText type="title">Wellcome page</ThemedText>
      <HelloWave />
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
