import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { IMessage } from '../../interfaces/IMessage';

const Chats= ({navigator}) => {

    const [messages, setMessages] = useState([]);
messages:IMessage
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt : new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


    return(
        <View style={styles.container}>
            <Text>Find yours Chats</Text>
            <Button
            title="click here"
            onPress={()=>alert('Button Clicked ! ')}
            />
        </View>
    )
}

export default Chats;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#8fcbbc'
    }
})