import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import BackgroundSiluet from '../components/BackgroundSiluet.tsx';
import PrimaryButton from '../components/PrimaryButton.tsx';

const logoSource = require('../assets/images/bulanSabitLogin.png');

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const handleStart = () => {
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <BackgroundSiluet />
      <View style={styles.contentArea}>
        <Image
          source={logoSource}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

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
    backgroundColor: '#616161',
    paddingTop: 150,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  contentArea: {
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  button: {
    marginTop: 'auto',
    bottom: 230,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#0A1828',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
