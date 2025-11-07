import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

// (1) IMPORT KOMPONEN REUSABLE BARU
import BackgroundSiluet from '../components/BackgroundSiluet.tsx';
import PrimaryButton from '../components/PrimaryButton.tsx';

// (2) HAPUS `patternSource` DARI SINI (karena sudah pindah ke BackgroundSiluet.tsx)
const logoSource = require('../assets/images/bulanSabitLogin.png');
// const patternSource = require('../assets/images/siluetMasjid.png'); // <-- SUDAH TIDAK DIPERLUKAN DI SINI

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const handleStart = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      {/* (3) GANTI <Image ... /> DENGAN KOMPONEN BARU */}
      <BackgroundSiluet />
      {/* --- END LATAR BELAKANG --- */}

      {/* 2. AREA UTAMA LOGO & TEKS */}
      <View style={styles.contentArea}>
        {/* Logo Bulan Bintang Emas */}
        <Image
          source={logoSource}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* 3. Tombol "Mulai" (Diposisikan dengan margin auto untuk proporsi) */}
      <PrimaryButton
        style={styles.button}
        onPress={handleStart}
        title="Mulai"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161', // (Menggunakan style Anda)
    paddingTop: 150,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  // (4) STYLE contentArea (PENTING AGAR POSISI LOGO TETAP)
  contentArea: {
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 'auto',
    bottom: 230, // (Menggunakan style Anda)
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#0A1828',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // (5) HAPUS `styles.backgroundImage` DARI SINI
  // (Karena style ini sudah pindah ke BackgroundSiluet.tsx)
  /*
  backgroundImage: {
    ...
  },
  */
});

export default SplashScreen;
