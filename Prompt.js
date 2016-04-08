import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Button from './Button'

export default class Prompt extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillUnmount() {
    this.setState({input: ''})
  }

  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.label}>What's your name?</Text>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          autoCapitalize="none"
          accessibilityLabel="What's your name"
          onChangeText={this.onChange}
          placeholder="Your name"
          value={this.state.input}
        />
        <Button
          styles={{
            view: styles.buttonView,
            text: styles.buttonText
          }}
          onPress={this.onSubmit}
          text="Ok"
        />
      </View>
    )
  }

  onChange(text) {
    this.setState({input: text})
  }

  onSubmit(event) {
    this.props.onSubmit(this.state.input)
  }

}

const styles = StyleSheet.create({
  view: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  label: {
    fontSize: 17,
    color: 'white'
  },
  textInput: {
    height: 60,
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingLeft: 10
  },
  buttonView: {
    width: 60,
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  }
})
