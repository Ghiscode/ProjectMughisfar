// src/components/BackgroundSiluet.tsx

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const patternSource = require('../assets/images/siluetMasjid.png'); // Path yang sudah benar

// (1) Nama variabel SAMA DENGAN nama file
const BackgroundSiluet: React.FC = () => {
  return (
    <Image
      source={patternSource}
      style={styles.backgroundImage}
      resizeMode="stretch"
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    // ... (style Anda di sini)
     position: 'absolute',

    bottom: 0, // Tempelkan di bagian paling bawah

    left: 0,

    right: 0,

    width: '200%',

    height: 300,

    tintColor: '#1E2A3A', // Atur tinggi agar pattern tidak menutupi logo



    // Kunci: Opacity agar terlihat seperti pattern, bukan gambar utama

    opacity: 0.5,



    // Karena kita menggunakan resizeMode="repeat",

    // width dan height ini akan menentukan area mana yang akan diulang.
  },
});

// (2) Ekspor variabel tersebut
export default BackgroundSiluet;
