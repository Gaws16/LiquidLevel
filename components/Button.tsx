import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function Button({
  label,
  lightColor,
  darkColor,
  styleContainer,
  onPress,
}: {
  label: string;
  lightColor?: string;
  darkColor?: string;
  styleContainer?: StyleSheet;
  onPress?: () => void;
}) {
  return (
    <ThemedView
      style={styles.container}
      lightColor={lightColor}
      darkColor={darkColor}
    >
      <Pressable onPress={onPress} style={styles.button}>
        <ThemedText>{label}</ThemedText>
      </Pressable>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
  },
  button: {
    padding: 7,
    borderRadius: 10,
    width: 80,
    alignItems: "center",
  },
});
