import { Image, Modal, StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import HeartIcon from 'react-native-vector-icons/AntDesign'
import CommentIcon from 'react-native-vector-icons/FontAwesome'
import SaveIcon from 'react-native-vector-icons/Fontisto'
import ShareIcon from 'react-native-vector-icons/SimpleLineIcons'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import SendIcon from 'react-native-vector-icons/Ionicons'
import React, { useState } from 'react'

const Posts = ({ data }) => {
    const [heartActive, setHeartActive] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <View style={styles.postHeader}>
                    <View style={styles.gymProfile}>
                        <Image
                            source={{
                                uri: data.pfImage
                            }}
                            style={styles.profilePic}
                        />
                        <Text style={styles.profileName}>{data.fullname}</Text>
                    </View>
                    <Icon
                        name='options-vertical'
                        size={20}
                        style={{ color: 'white' }}
                    />
                </View>
                <Image
                    source={{
                        uri: 'https://ceinture-de-force.fr/cdn/shop/articles/Blog_body_france_1.png?v=1692176612&width=1100'
                    }}
                    style={styles.postImage}
                />
                <View style={styles.postContent}>
                    <Text style={styles.postText}>
                        When I feel tired, I just think about how
                        great I will feel once I finally reach my goal.
                    </Text>
                </View>
                <View style={styles.iconsContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 18 }}>
                        <HeartIcon
                            onPress={() => {
                                setHeartActive(!heartActive)
                            }}
                            name='hearto'
                            size={24}
                            style={{ color: heartActive ? '#9AC61C' : 'white' }} />
                        <CommentIcon
                            name='comment-o'
                            size={26}
                            style={{ color: 'white' }}
                            onPress={() => setModalVisible(true)}
                        />
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <CloseIcon name='down' size={24} style={{ color: 'gray' }} />
                                    </Pressable>
                                </View>
                                <View style={styles.modalTitle}>
                                    <Text style={styles.titleText}>Comments</Text>
                                </View>
                            </View>
                            <View style={styles.commentsContainer}>
                                <View style={styles.commentContainer}>
                                    <View style={styles.commentProfile}>
                                        <Image
                                            source={{
                                                uri: data.pfImage
                                            }}
                                            style={styles.commentPic}
                                        />
                                        <View style={styles.profileNameContainer}>
                                            <Text style={styles.commentProfileName}>{data.fullname}</Text>
                                            <Text style={styles.commentText}>this the best gym in the world</Text>
                                        </View>
                                    </View>
                                    <HeartIcon
                                        name='hearto'
                                        size={20}
                                        style={{ color: heartActive ? '#9AC61C' : 'white' }} />
                                </View>
                                <View style={styles.commentContainer}>
                                    <View style={styles.commentProfile}>
                                        <Image
                                            source={{
                                                uri: data.pfImage
                                            }}
                                            style={styles.commentPic}
                                        />
                                        <View style={styles.profileNameContainer}>
                                            <Text style={styles.commentProfileName}>{data.fullname}</Text>
                                            <Text style={styles.commentText}>this the best gym in the world</Text>
                                        </View>
                                    </View>
                                    <HeartIcon
                                        name='hearto'
                                        size={20}
                                        style={{ color: heartActive ? '#9AC61C' : 'white' }} />
                                </View>
                                <View style={styles.commentContainer}>
                                    <View style={styles.commentProfile}>
                                        <Image
                                            source={{
                                                uri: data.pfImage
                                            }}
                                            style={styles.commentPic}
                                        />
                                        <View style={styles.profileNameContainer}>
                                            <Text style={styles.commentProfileName}>{data.fullname}</Text>
                                            <Text style={styles.commentText}>this the best gym in the world</Text>
                                        </View>
                                    </View>
                                    <HeartIcon
                                        name='hearto'
                                        size={20}
                                        style={{ color: heartActive ? '#9AC61C' : 'white' }} />
                                </View>
                                <View style={styles.commentContainer}>
                                    <View style={styles.commentProfile}>
                                        <Image
                                            source={{
                                                uri: data.pfImage
                                            }}
                                            style={styles.commentPic}
                                        />
                                        <View style={styles.profileNameContainer}>
                                            <Text style={styles.commentProfileName}>{data.fullname}</Text>
                                            <Text style={styles.commentText}>this the best gym in the world</Text>
                                        </View>
                                    </View>
                                    <HeartIcon
                                        name='hearto'
                                        size={20}
                                        style={{ color: heartActive ? '#9AC61C' : 'white' }} />
                                </View>
                            </View>
                            <View style={styles.commentInputContainer}>
                                <Image
                                    source={{
                                        uri: data.pfImage
                                    }}
                                    style={styles.commentPic}
                                />
                                <TextInput
                                    placeholder='Add a comment'
                                    placeholderTextColor={'gray'}
                                    style={styles.commentInput}
                                />
                                <SendIcon
                                    name='send'
                                    size={24}
                                    style={{ color: '#9AC61C', position: 'absolute', right: 20, bottom: 22 }}
                                />
                            </View>
                        </Modal>
                        <ShareIcon name='share' size={22} style={{ color: 'white' }} />
                    </View>
                    <SaveIcon name='favorite' size={24} style={{ color: 'white' }} />
                </View>
            </View>
        </View>
    )
}

export default Posts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    postContainer: {
        flexDirection: 'column',
        width: '100%',
        padding: 10,
        marginBottom: 100
    },
    postHeader: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    gymProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    profileName: {
        color: 'white',
        fontWeight: 'bold'
    },
    postImage: {
        height: '100%',
        height: 250,
        borderRadius: 10,
    },
    postContent: {
        width: '100%',
        height: 'auto',
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginTop: 5
    },
    postText: {
        color: 'white',
        textAlign: 'justify',
    },
    iconsContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalView: {
        margin: 20,
        backgroundColor: 'black',
        borderRadius: 20,
        padding: 35,
        width: "100%",
        height: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        borderBottomColor: 'gray',
        borderWidth: 0.2,
        height: 50,
        position: 'absolute',
        top: 60,
        width: '100%',
    },
    titleText: {
        fontSize: 21,
        color: 'white',
        textAlign: 'center',
    },
    commentInputContainer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 10
    },
    commentPic: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    commentInput: {
        width: '85%',
        height: 50,
        borderRadius: 50,
        borderColor: '#9AC61C',
        borderWidth: 1,
        position: 'absolute',
        right: 5,
        paddingHorizontal: 10,
        color: 'white'
    },
    commentsContainer: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        top: '15%',
        paddingHorizontal: 15,
        gap:20
    },
    commentProfileName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center'
    },
    commentProfile: {
        flexDirection: 'row',
        gap: 8
    },
    commentText: {
        color: 'white',
    },
    commentContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        paddingBottom: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    }
})