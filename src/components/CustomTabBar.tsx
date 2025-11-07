import React from 'react';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

// (1) PASTIKAN PATH INI BENAR
const navBackground = require('../assets/images/Group 12.png');

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  // state.index akan memberitahu kita tab mana yang sedang aktif
  const activeIndex = state.index;

  // (2) Fungsi untuk pindah tab
  const navigateTo = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    // (3) Gunakan ImageBackground dengan gambar navbar Anda
    <ImageBackground
      source={navBackground}
      style={styles.background}
      resizeMode="stretch" // 'stretch' agar pas di layar
    >
      {/* (4) Container untuk Tombol-Tombol Tak Terlihat */}
      <View style={styles.buttonContainer}>
        {/* Tombol Home (Kiri) */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo('Beranda')}
        />

        {/* Tombol Search (Tengah) */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo('Search')}
        />

        {/* Tombol Profile (Kanan) */}
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigateTo('Profile')}
        />
      </View>
    </ImageBackground>
  );
};

// (5) Style untuk menempatkan tombol transparan di atas gambar
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width, // Lebar penuh layar
    height: 80, // Sesuaikan tinggi agar pas dengan gambar PNG
    backgroundColor: 'transparent', // Pastikan transparan
    position: 'absolute', // Posisikan di bawah
    bottom: 0,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  navButton: {
    flex: 1, // Bagi 3 tombol secara merata
    height: '100%',
    // backgroundColor: 'rgba(255,0,0,0.5)', // Hapus komentar ini untuk melihat area klik
  },
});

export default CustomTabBar;
