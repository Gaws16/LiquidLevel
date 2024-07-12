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
        <ThemedText lightColor={lightColor} darkColor={darkColor}>
          {label}
        </ThemedText>
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
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
});
