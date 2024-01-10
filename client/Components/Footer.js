import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();


  const [iconHome, setIconHome] = useState(false);
  const [iconProfile, setIconProfile] = useState(false);
  const [iconBasket, setIconBasket] = useState(false);
  const [iconHeart, setIconHeart] = useState(false);
  
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={() => {
          setIconHome(true);
          setIconProfile(false);
          setIconBasket(false);
          setIconHeart(false);
        }}
      >
        <View>
          <Entypo
            name="home"
            size={30}
            color={iconHome ? '#9AC61C' : 'white'}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIconProfile(true);
          setIconBasket(false);
          setIconHeart(false);
          setIconHome(false);
        }}
      >
        <View>
          <AntDesign
            name="user"
            size={30}
            color={iconProfile ? '#9AC61C' : 'white'}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.plus}>
        <View>
          <Entypo name="plus" size={30} color={'black'} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Allproducts")
          setIconBasket(true);
          setIconProfile(false);
          setIconHeart(false);
          setIconHome(false);
        }}
      >
        <View>
          <AntDesign
            name="shoppingcart"
            size={30}
            color={iconBasket ? '#9AC61C' : 'white'}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setIconHeart(true);
          setIconProfile(false);
          setIconBasket(false);
          setIconHome(false);
        }}
      >
        <View>
          <AntDesign
            name="hearto"
            size={30}
            color={iconHeart ? '#9AC61C' : 'white'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    backgroundColor: '#192126',
    flexDirection: 'row',
    width: 350,
    height: 60,
    padding: 10,
    borderRadius: 100,
    marginTop: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  plus: {
    backgroundColor: '#BEFF03',
    borderRadius: 100,
    padding: 5,
  },
};

export default Footer;
