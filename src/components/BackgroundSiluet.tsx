import React from 'react';
import { Image, StyleSheet } from 'react-native';

const patternSource = require('../assets/images/siluetMasjid.png');

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
     position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    width: '200%',
    height: 300,
    tintColor: '#1E2A3A', 
    opacity: 0.5,
  },
});
export default BackgroundSiluet;
