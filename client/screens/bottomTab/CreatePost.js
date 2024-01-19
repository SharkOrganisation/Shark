import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { FIREBASE_APP } from '../../firebase';
import axios from 'axios';
import { ipAddress } from '../../ipConfig';
import { FIREBASE_AUTH } from '../../firebase'
const storage = getStorage(FIREBASE_APP);


const CreatePost = ({navigation}) => {

    const [imageUrl, setImageUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [postContent, setPostContent] = useState('')
    const [userData, setUserData] = useState([])
    const currentUser = FIREBASE_AUTH.currentUser



    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            uploadImage(result.assets[0].uri);
        }
    };

    const uploadImage = async (image) => {
        try {
            if (image) {
                const response = await fetch(image);
                const blob = await response.blob();
                const storageRef = ref(storage, `postPictures/${Date.now()}.jpg`);

                await uploadBytes(storageRef, blob);
                const downloadURL = await getDownloadURL(storageRef);
                setImageUrl(downloadURL)
                console.log('Image uploaded. Download URL:', downloadURL);
            } else {
                console.error('No image selected.');
            }
        } catch (error) {
            console.error('Error uploading image:', error.message);
        }
    };

    const handlePublishPress = async () => {
        setIsLoading(true)
        try {
            await axios.post(`http://${ipAddress}:3000/api/posts/add`, {
                content: postContent,
                image: [imageUrl],
                gymId: currentUser.uid,
                coachId: null
            })
            navigation.navigate('gymProfile')
            setIsLoading(false)
        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.postInputContainer}>
                    <TextInput
                        onChangeText={(text) => setPostContent(text)}
                        placeholder='Add a new post'
                        placeholderTextColor={'gray'}
                        style={styles.postInput}
                        multiline
                    />
                    <TouchableOpacity onPress={pickImage} style={styles.addPic}>
                        <Icon name='picture' size={35} style={{ color: '#9AC61C' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePublishPress} style={styles.btn}>
                        <Text style={[styles.btnText,{opacity: isLoading ? 0.5 : 1}]} >{isLoading ? 'LOADING...' : 'PUBLISH'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 80
    },
    postInputContainer: {
        height: 500,
        width: '100%',
        padding: 10
    },
    postInput: {
        width: '100%',
        height: 300,
        borderColor: '#9AC61C',
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 23,
        fontWeight: 'bold',

    },
    btn: {
        marginTop: 30,
        backgroundColor: '#9AC61C',
        borderWidth: 1,
        height: 60,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    btnText: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    addPic: {
        position: 'absolute',
        bottom: 200,
        right: 20,
    }
})

export default CreatePost