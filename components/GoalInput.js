import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  //enteredText is from the TextInput tag
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //the props.onAddGoal is a function and it passes the enteredGoalText for App.js
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')}></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            {/* addGoalHandler is the function on this file not in App.js */}
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311bcb',
  },
  image: {
    width: 100,
    height: 100,
    margin: "2%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    width: "95%",
    padding: "2%",
  },
  buttonContainer: {
    margin: "5%",
    flexDirection: 'row',
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
  }
});
