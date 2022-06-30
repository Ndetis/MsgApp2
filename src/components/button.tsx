import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

type ButtonProps = {
  style?: any;
  textStyle?: any;

  onPress: () => void;
  title: string;
}

export default function(props: ButtonProps) {
  return (
    <Pressable
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>
        {props.title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffffff",
  },
  text: {
    textAlign: 'center',
    margin: 8,
    color: '#007AFF',
    fontSize: 18,
  },
});