import React, {
  Component,
  Dimensions,
  ListView,
  StyleSheet
} from 'react-native'
import ChatItem from './ChatItem'

export default class ChatList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => true,
      })
    }
    this.renderRow = this.renderRow.bind(this)
  }

  // componentWillUpdate() {
  //   this.shouldScrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
  // }

  // componentDidUpdate() {
  //   if (this.shouldScrollBottom) document.body.scrollTop = document.body.scrollHeight
  // }

  render() {
    let dataSource = this.state.dataSource.cloneWithRows(this.props.messages)
    return (
      <ListView
        style={styles.listView}
        dataSource={dataSource}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(row) {
    return (
      <ChatItem
        message={row}
        name={this.props.name}
        handleRemove={this.props.handleRemove}
      />
    )
  }

}

const styles = StyleSheet.create({
  listView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#eeeeee'
  }
})
