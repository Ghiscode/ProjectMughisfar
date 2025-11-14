import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

// Definisikan tipe props
interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean; 
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  isLoading = false,
  style,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        (disabled || isLoading) && styles.buttonDisabled,
      ]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="#0A1828" /> 
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD66A',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#FFD66A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#999900',
  },
  buttonText: {
    color: '#0A1828',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
