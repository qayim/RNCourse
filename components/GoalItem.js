import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View key={props.key} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed ? styles.pressedItem: ""}
        // this one is for iOS to have a ripple effect
      >
        <Text style={styles.goalText}>
          {props.text} id: {props.id}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: {
    opacity: 0.5
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
