import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { GiftedChat, Bubble, Avatar, InputToolbar } from 'react-native-gifted-chat';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../firebase';
import { addDoc, collection, orderBy, onSnapshot, query } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/SimpleLineIcons';



const ChatScreen = ({ route,navigation }) => {
    const [messages, setMessages] = useState([]);
    const userId = FIREBASE_AUTH.currentUser?.uid;
    const { user } = route.params;

    const getChatRoomId = (user1Id, user2Id) => {
        return user1Id < user2Id ? `${user1Id}_${user2Id}` : `${user2Id}_${user1Id}`;
    };

    useEffect(() => {
        navigation.setOptions({ 
            headerRight:()=>(
                <Icon name='options-vertical' size={20} style={{color:'#BEFF03'}}/>
            ),
            headerTitle: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                  <Image source={{ uri: user.avatar }} style={{ width: 40, height: 40, borderRadius: 40, marginRight: 10 }} />
                  <Text style={{color:'#BEFF03',fontWeight:'bold',fontSize:18}}>{user.name}</Text>
                </View>
              )
         });
      }, [user]);

    useEffect(() => {
        if (userId && user) {
            const chatRoomId = getChatRoomId(userId, user.id);
            const collectionRef = collection(FIRESTORE_DB, 'chats', chatRoomId, 'messages');
            const q = query(collectionRef, orderBy('createdAt', 'desc'));

            const unsubscribe = onSnapshot(q, (snapshot) => {
                setMessages(
                    snapshot.docs.map((doc) => ({
                        _id: doc.id,
                        createdAt: doc.data().createdAt.toDate(),
                        text: doc.data().text,
                        user: doc.data().user,
                    }))
                );
            });

            return () => unsubscribe();
        }
    }, [userId, user]);

    const onSend = useCallback(async (newMessages = []) => {
        const { _id, createdAt, text } = newMessages[0];
        const userId = FIREBASE_AUTH.currentUser?.uid;

        if (userId) {
            const chatRoomId = getChatRoomId(userId, user.id);

            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, {
                    _id,
                    createdAt,
                    text,
                    user: {
                        _id: userId,
                    },
                })
            );

            try {
                await addDoc(collection(FIRESTORE_DB, 'chats', chatRoomId, 'messages'), {
                    _id,
                    createdAt,
                    text,
                    user: {
                        _id: userId,
                    },
                });
            } catch (error) {
                console.error('Error adding message to Firestore:', error);
            }
        } else {
            console.error('User ID is undefined.');
        }
    }, [user]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', paddingBottom: 20 }}>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => onSend(newMessages)}
                user={{
                    _id: FIREBASE_AUTH?.currentUser?.uid,
                    avatar: "https://i.pravatar.cc/300"
                }}
                messagesContainerStyle={{
                    backgroundColor: 'black',
                }}
                containerStyle={{ backgroundColor: 'black' }}
                textInputStyle={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 5
                }}
                renderBubble={(props) => {
                    console.log('Rendering Bubble with Avatar:', props);
                    return (
                        <Bubble
                            {...props}
                            wrapperStyle={{
                                left: {
                                    backgroundColor: '#fff',
                                    width: '80%',
                                },
                                right: {
                                    backgroundColor: '#D0E398',
                                    width: '80%',
                                },
                            }}
                            textStyle={{
                                left: { color: 'black' },
                                right: { color: 'black' },
                            }}
                        >

                        </Bubble>
                    );
                }}




            />
        </SafeAreaView>
    );
};




export default ChatScreen;
