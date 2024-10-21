import { StyleSheet, View } from "react-native";
import { WorkoutList } from "./components/WorkoutList";

export default function App() {
  return (
    <View style={styles.container}>
      <WorkoutList workoutName="Bench Press" />
      <WorkoutList workoutName="Shoulder Press" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
