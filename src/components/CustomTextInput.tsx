import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface CustomTextInputProps extends TextInputProps {
  iconName: string; 
  placeholder: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  iconName,
  style,
  ...props
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        size={20}
        color="#FFD700"
        style={styles.inputIcon}
      />
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor="#888"
        {...props}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A3A',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFD70050',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CustomTextInput;
