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
  isLoading?: boolean; // Untuk penanganan loading state (Kategori 6)
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
      {/* Kategori 6: Mengelola loading state */}
      {isLoading ? (
        <ActivityIndicator color="#0A1828" /> // Warna gelap untuk kontras
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD66A', // Warna Emas
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    // Kategori 8: Efek Sederhana
    shadowColor: '#FFD66A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonDisabled: {
    backgroundColor: '#999900', // Emas yang lebih gelap saat disabled
  },
  buttonText: {
    color: '#0A1828', // Teks tombol gelap
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
