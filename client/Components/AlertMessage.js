import { Modal, Text, Pressable, View,TouchableOpacity } from "react-native";


const AlertMessage = ({ modalVisible, setModalVisible, title, message }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onPress={() => setModalVisible(false)}
        >
          <View
            style={{
              backgroundColor: '#BEFF03',
              padding: 50,
              borderRadius: 10,
              width: 350,
              // height: 200,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
              {title}
            </Text>
            <Text style={{ fontSize: 16 }}>{message}</Text>

            <TouchableOpacity
            style={{
              backgroundColor: '#BEFF03',
              padding: 10,
              borderRadius: 5,
              marginTop: 15,
              alignItems: 'center',
              borderWidth: 1, // Added border properties here
              borderColor: 'black',
             
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Okay</Text>
          </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    );
  };

export default AlertMessage;
