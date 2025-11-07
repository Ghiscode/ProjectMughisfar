import React, { useState } from 'react';
// (1) --- TAMBAHAN BARU --- (Import Image)
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// --- (2) IMPORT KOMPONEN REUSABLE & ASET ---
import CustomTextInput from '../components/CustomTextInput';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundSiluet from '../components/BackgroundSiluet'; // Background Pattern
const logoSource = require('../assets/images/bulanSabitLogin.png'); // Logo Login

// ---
import { RootStackParamList } from '../types/navigation';

type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // if (email === '' || password === '') {
    //   Alert.alert('Error', 'Email dan password tidak boleh kosong.');
    //   return;
    // }
    // Navigasi yang sudah benar
    navigation.replace('AppTabs', {
      screen: 'Beranda',
    });
  };

  return (
    // (3) --- Ganti <View> dengan <ScrollView> agar bisa scroll saat keyboard muncul ---
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}
    >
      {/* (4) --- TAMBAHAN BARU --- (Background Pattern) */}
      <BackgroundSiluet />

      {/* 1. Area Logo & Judul (MODIFIKASI) */}
      <View style={styles.header}>
        {/* Mengganti <Text style={styles.logo}> dengan Image */}
        <Image
          source={logoSource}
          style={styles.logoImage}
          resizeMode="contain"
        />
        {/* <Text style={styles.subtitle}>Selamat datang kembali.</Text> */}
        {/* Desain Figma tidak memiliki subtitle, jadi kita sembunyikan */}
      </View>

      {/* 2. Area Input (Sudah menggunakan CustomTextInput) */}
      <View style={styles.inputArea}>
        <CustomTextInput
          iconName="email-outline"
          placeholder="Email anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CustomTextInput
          iconName="lock-outline"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* 3. Tombol Utama (Sudah menggunakan PrimaryButton) */}
      <PrimaryButton title="Masuk" onPress={handleLogin} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum punya akun?</Text>
        <TouchableOpacity
          onPress={() => {
            /* navigate ke Register */
          }}
        >
          <Text style={styles.registerText}>Daftar</Text>
        </TouchableOpacity>
      </View>

      {/* (5) --- TAMBAHAN BARU --- (Social Login Sesuai Figma) */}
      <View style={styles.socialLoginContainer}>
        {/* Tombol Google */}
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        {/* Tombol Apple */}
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView> // <-- Penutup ScrollView
  );
};

// --- STYLESHEET YANG DIPERBARUI ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
  },
  scrollContainer: {
    flexGrow: 1, // Memastikan bisa scroll
    paddingHorizontal: 30,
    paddingTop: 80, // Mengurangi padding atas agar logo pas
    paddingBottom: 40, // Memberi ruang di bawah
  },
  header: {
    marginBottom: 40, // Mengurangi margin bawah
    alignItems: 'center',
  },
  // (HAPUS style logo teks)
  // (TAMBAHKAN style logo image)
  logoImage: {
    width: 150, // Sesuaikan ukuran logo
    height: 150,
    marginBottom: 10,
  },
  subtitle: {
    color: '#CCC',
    fontSize: 16,
    marginTop: 5,
  },
  inputArea: {
    marginBottom: 20, // Mengurangi margin bawah
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#CCC',
    marginRight: 5,
  },
  registerText: {
    color: '#FFD66A',
    fontWeight: 'bold',
  },
  // (TAMBAHAN BARU: Social Login Styles)
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30, // Jarak dari footer
  },
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E2A3A',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: '#FFD70050',
  },
});

export default LoginScreen;
