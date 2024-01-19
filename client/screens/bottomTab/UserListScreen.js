import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebase';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const UserListScreen = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(FIRESTORE_DB, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const initiateChat = (selectedUser) => {
    navigation.navigate('chatScreen', { user: selectedUser });
  };

  const renderUserItem = ({ item }) => (
    <TouchableOpacity onPress={() => initiateChat(item)}>
      <View style={styles.userItem}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{item.name}</Text>
        </View>
        <Icon name='mark-chat-unread' size={24} style={{ color: '#9AC61C' }} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUserItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 20,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 9,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'gray',
    width: '100%',
    marginBottom: 10,
    gap: 5,
    justifyContent:'space-between',
    paddingRight:20,

  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  userName: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UserListScreen;
