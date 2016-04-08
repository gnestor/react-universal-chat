import React, {
  Component,
  ListView,
  StyleSheet
} from 'react-native'
import ChatItem from './ChatItem'

export default class ChatList extends Component {

  // constructor(props) {
  //   super(props)
  // }

  // componentWillUpdate() {
  //   this.shouldScrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
  // }

  // componentDidUpdate() {
  //   if (this.shouldScrollBottom) document.body.scrollTop = document.body.scrollHeight
  // }

  render() {
    let children = this.props.messages.map(message => (
      <ChatItem
        message={row}
        name={this.props.name}
        handleRemove={this.props.handleRemove}
      />
    ))
    return (
      <ListView
        style={styles.listView}
        children={children}
        renderRow={this.renderRow}
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
