import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  workoutName: string;
  isCompleted?: boolean;
};

export function WorkoutList({ workoutName, isCompleted }: Props) {
  const handleRemove = () => {
    Alert.alert(`Are you sure you want to remove ${workoutName}`),
      "You can't undo this",
      [
        {
          text: "Yes",
          onPress: () => console.log("Okay, Remove"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ];
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedConatiner : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >{workoutName}</Text>
      <TouchableOpacity onPress={handleRemove} activeOpacity={0.7}>
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colorCerulean,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  completedConatiner: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
});
