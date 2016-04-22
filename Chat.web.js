import React, {
  Component,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import ReactDOM from 'react-dom'
import Rebase from 're-base'
import ChatList from './ChatList.web'
import Prompt from './Prompt'
import Button from './Button'

const base = Rebase.createClass('https://react-in-a-day.firebaseio.com/')

export default class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      input: '',
      name: ''
    }
    this.node = null
    this.shouldScrollBottom = false
    this.handlePrompt = this.handlePrompt.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSend = this.handleSend.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    base.syncState('chatList', {
      context: this,
      state: 'messages',
      asArray: true
    })
  }

  componentWillUpdate() {
    let node = ReactDOM.findDOMNode(this.node)
    this.shouldScrollBottom = node.scrollTop + window.innerHeight >= node.scrollHeight
  }

  componentDidUpdate() {
    let node = ReactDOM.findDOMNode(this.node)
    if (this.shouldScrollBottom) node.scrollTop = node.scrollHeight
  }

  render() {
    return (
      <View style={styles.view}>
        {this.state.name ? null : <Prompt style={styles.prompt} onSubmit={this.handlePrompt} />}
        <ChatList
          ref={ref => this.node = ref}
          style={styles.list}
          messages={this.state.messages}
          name={this.state.name}
          handleRemove={this.handleRemove}
        />
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          accessibilityLabel="Say something..."
          onChangeText={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="Say something..."
          value={this.state.input}
        />
        <Button
          styles={{
            view: styles.buttonView,
            text: styles.buttonText
          }}
          onPress={this.handleSend}
          text="Send"
        />
      </View>
    </View>
    )
  }

  handlePrompt(name) {
    console.log('handlePrompt', name)
    this.setState({name})
  }

  handleChange(text) {
    this.setState({input: text})
  }

  handleKeyDown(event) {
    console.log('handleKeyDown')
    if (event.key === 'Enter') this.handleSend()
  }

  handleSend() {
    if (this.state.input !== '') {
      let time = new Date()
      this.setState({
        messages: this.state.messages.concat({
          name: this.state.name,
          text: this.state.input,
          time: JSON.stringify(new Date())
        }),
        input: ''
      })
    }
  }

  handleRemove(key) {
    this.setState({
      messages: this.state.messages.filter(message => message.key !== key)
    })
  }

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eeeeee'
  },
  list: {
    flex: 1,
  },
  input: {
    height: 60,
    flexDirection: 'row'
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 15,
    flex: 1
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
