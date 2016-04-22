import React, {
  Component,
  ListView,
  StyleSheet
} from 'react-native'
import ChatItem from './ChatItem.web'

export default class ChatList extends Component {

  render() {
    let children = this.props.messages.map(message => (
      <ChatItem
        message={message}
        name={this.props.name}
        handleRemove={this.props.handleRemove}
      />
    ))
    return (
      <ListView
        style={styles.listView}
        children={children}
      />
    )
  }

}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: '#eeeeee'
  }
})
