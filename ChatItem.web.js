import React, {
  Component,
  Image,
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Highlight from 'react-highlight'
import Button from './Button'
import Link from './Link'

export default class ChatItem extends Component {

  constructor(props) {
    super(props)
    this.transform = this.transform.bind(this)
    this.onRemove = this.onRemove.bind(this)
  }

  render() {
    let {
      message,
      name
    } = this.props
    let timestamp = new Date(JSON.parse(message.time))
    return (
      <View style={styles.view}>
        <View style={styles.left}>
          <Text style={[styles.text, styles.name]}>{`${message.name}: `}</Text>
          <View style={styles.message}>{this.transform(message.text)}</View>
        </View>
        <View style={styles.right}>
          <Text style={[styles.text, styles.time]}>{`${timestamp.getHours()}:${timestamp.getMinutes()}`}</Text>
          {message.name === name ? (
            <Button
              styles={{
                view: styles.removeView,
                text: styles.removeText
              }}
              onPress={this.onRemove}
              text="✖"
            />
          ) : null}
        </View>
      </View>
    )
  }

  onRemove() {
    this.props.handleRemove(this.props.message.key)
  }

  transform(message) {
    switch (true) {
      case /https?\:\/\//.test(message):
        if (/\.jpg|png|gif$/.test(message)) {
          return message.split(' ').map((word, index) => {
            if (word.match(/\.jpg|png|gif$/)) return (
              <Image
                key={index}
                style={styles.image}
                source={{uri: word}}
                resizeMode="cover"
              />
            )
            return (
              <Text
                key={word}
                style={styles.text}
                numberOfLines={5}
              >
                {word + ' '}
              </Text>
            )
          })
        }
        return message.split(' ').map((word, index) => {
          if (word.match(/https?\:\/\//g)) return (
            <Link
              key={index}
              styles={{
                text: styles.link
              }}
              text={word}
              onPress={() => Linking.openURL(word).catch(error => console.error('Link.onPress', error))}
            />
          )
          return (
            <Text
              key={word}
              style={styles.text}
              numberOfLines={5}
            >
              {word + ' '}
            </Text>
          )
        })
      case /^\`.*\`$/.test(message):
        return (
          <Highlight className='javascript'>
            {message.replace(/\`/g, '')}
          </Highlight>
        )
      default:
        return (
          <Text
            key={message}
            style={styles.text}
            numberOfLines={5}
          >
            {message}
          </Text>
        )
    }
  }

}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
    padding: 15
  },
  left: {
    flex: 1,
    flexDirection: 'column'
  },
  right: {
    width: 50
  },
  text: {
    fontSize: 17,
    color: 'black'
  },
  name: {
    fontWeight: '700',
    overflow: 'hidden'
  },
  message: {

  },
  time: {
    color: 'silver'
  },
  image: {
    width: 300,
    height: 300
  },
  link: {
    color: 'blue',
    fontSize: 17
  },
  removeView: {
    backgroundColor: 'transparent'
  },
  removeText: {
    color: 'red'
  }
})
