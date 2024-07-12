import { Image, StyleSheet, Text, View } from "react-native";
const logo = require("../assets/images/react-logo.png");
export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Wellcome page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
