import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'

const CreatePost = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.postInputContainer}>
                    <TextInput
                        placeholder='Add a new post'
                        placeholderTextColor={'gray'}
                        style={styles.postInput}
                        multiline
                    />
                    <TouchableOpacity style={styles.addPic}>
                        <Icon name='picture' size={35} style={{color:'#9AC61C'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>PUBLISH</Text>
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
    addPic:{
        position: 'absolute',
        bottom: 200,
        right: 20,
    }
})

export default CreatePost