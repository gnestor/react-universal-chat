import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

export default function Link(props) {
  let {styles} = props
  return (
    <TouchableHighlight style={{backgroundColor: 'white'}} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'blue'
  }
})
