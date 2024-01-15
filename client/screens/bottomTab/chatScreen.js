import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { GiftedChat, Bubble, Avatar, InputToolbar } from 'react-native-gifted-chat';
import { FIRESTORE_DB, FIREBASE_AUTH } from '../../firebase';
import { addDoc, collection, orderBy, onSnapshot, query } from 'firebase/firestore';



const ChatScreen = () => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        const collectionRef = collection(FIRESTORE_DB, 'chats');
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
    }, []);

    const onSend = useCallback((newMessages = []) => {
        const { _id, createdAt, text, user } = newMessages[0];
        const userId = FIREBASE_AUTH.currentUser?.uid;

        if (userId) {
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

            addDoc(collection(FIRESTORE_DB, 'chats'), {
                _id,
                createdAt,
                text,
                user: {
                    _id: userId,
                },
            });
        } else {
            console.error('User ID is undefined.');
        }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black',paddingBottom:100 }}>
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
