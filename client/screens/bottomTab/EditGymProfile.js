import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

const EditGymProfile = ({route}) => {
    const {gymData} = route.params
    console.log(gymData);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileInfo}>
                <Image
                    source={{
                        uri: gymData.pfImage
                    }}
                    style={styles.pfImage}
                />
                <TouchableOpacity style={styles.editPic}>
                    <Icon name='camera' style={{ fontSize: 20 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>USERNAME</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.fullname}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>E-mail</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.Email}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>TYPE</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.type}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>LOCATION</Text>
                    <TextInput
                        style={styles.Input}
                        defaultValue={gymData.location}
                    />
                </View>
                <View>
                    <Text style={{ color: "#BEFF03", fontWeight: 'bold' }}>BIO</Text>
                    <TextInput
                    multiline={true}
                        style={[styles.Input,{height:100}]}
                        defaultValue={gymData.bio}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={styles.btnText}>EDIT PROFILE</Text>
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