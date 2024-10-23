import { StyleSheet, Text, View } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.aboutusContainer}>
      <Text> About Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutusContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
