import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import { FIREBASE_APP } from '../../firebase';
import axios from 'axios'
import { ipAddress } from '../../ipConfig';
const storage = getStorage(FIREBASE_APP);

const EditGymProfile = ({ route }) => {
    const { gymData } = route.params
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [fullname, setFullname] = useState('')
    const [type, setType] = useState('')
    const [location, setLocation] = useState('')
    const [bio, setBio] = useState('')
    const [loading,setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };


    const uploadImage = async () => {
        try {
            if (image) {
                const response = await fetch(image);
                const blob = await response.blob();
                const storageRef = ref(storage, `gym_profiles/${Date.now()}.jpg`);

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

    const handleEditProfileClick = async () => {
        setLoading(true)
        try {
        const result = await axios.put(`http://${ipAddress}:3000/api/gym/updateGym/${gymData.id}`,{
            pfImage:imageUrl,
            fullname,
            type,
            location,
            bio
        })
        console.log(result);
        setLoading(false)

        } catch (error) {
        console.log(error);  
        setLoading(false) 
        }
        // console.log('====================================');
        // console.log({
        //     pfImage: imageUrl,
        //     fullname,
        //     type,
        //     location,
        //     bio
        // })
        // console.log('====================================');
    }



    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileInfo}>
                <TouchableOpacity onPress={pickImage}>
                    <Image
                        source={{
                            uri: imageUrl || gymData.pfImage
                        }}
                        style={styles.pfImage}

                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editPic} onPress={uploadImage} >
                    <Icon name='camera' style={{ fontSize: 20 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>USERNAME</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.fullname}
                        onChangeText={(text) => setFullname(text)}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>TYPE</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.type}
                        onChangeText={(text) => setType(text)}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>LOCATION</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.location}
                        onChangeText={(text) => setLocation(text)}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>BIO</Text>
                    <TextInput
                        multiline={true}
                        style={[styles.Input, { height: 100 }]}
                        defaultValue={gymData.bio}
                        onChangeText={(text) => setBio(text)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleEditProfileClick}
                >
                    <Text style={[styles.btnText,{opacity: loading ? 0.5 : 1}]}>{loading ? 'LOADING...' : 'EDIT PROFILE'}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    profileInfo: {
        marginTop: "5%",
        alignItems: 'center'
    },
    pfImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: "#9AC61C",
        borderWidth: 3,
    },
    editPic: {
        backgroundColor: "#9AC61C",
        width: 30,
        height: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
        bottom: 38,
        left: 45,
    },
    inputContainer: {
        marginTop: '8%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    Input: {
        backgroundColor: "transparent",
        borderColor: "#BEFF03",
        borderWidth: 1,
        color: '#BEFF03',
        borderRadius: 10,
        marginRight: 10,
        width: 350,
        height: 50,
        padding: 10
    },
    btn: {
        width: 250,
        backgroundColor: '#BEFF03',
        padding: 18,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 20,
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default EditGymProfile