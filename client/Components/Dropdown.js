import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon from your chosen library

const Dropdown = ({ onValueChange, items }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: '#97d91c',
      borderRadius: 10,
      backgroundColor: 'transparent',
      paddingRight: 30,
      marginTop: 20,
    },
    placeholder: {
      color: '#97d91c',
    },
    iconContainer: {
      top: 15,
      right:5,
    },
  });

  return (
    <View style={{width:200}}>
      <RNPickerSelect
        placeholder={{ label: 'Choose an exercice', value: null }}
        onValueChange={(value) => {
          setSelectedValue(value);
          onValueChange(value);
        }}
        items={items}
        style={{
          ...pickerSelectStyles,
          inputIOS: {
            ...pickerSelectStyles.inputIOS,
            color: selectedValue ? '#97d91c' : '#97d91c',
          },
        }}
        Icon={() => {
          return (
            <View style={pickerSelectStyles.iconContainer}>
              <Icon name="angle-down" size={24} color="#97d91c" />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Dropdown;
