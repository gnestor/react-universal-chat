import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

export default function Button(props) {
  let {styles} = props
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.view}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  )
}

// const styles = StyleSheet.create({
//   view: {
//     backgroundColor: 'blue',
//     padding: 15,
//     paddingHorizontal: 45
//   },
//   text: {
//     fontSize: 17,
//     color: 'white'
//   }
// })
