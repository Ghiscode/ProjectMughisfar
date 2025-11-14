import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../components/CustomTextInput';
import PrimaryButton from '../components/PrimaryButton';
import BackgroundSiluet from '../components/BackgroundSiluet';
import { loginUser } from '../api/AuthService';
import { RootStackParamList } from '../types/navigation';
const logoSource = require('../assets/images/bulanSabitLogin.png');

type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email dan password tidak boleh kosong.');
      return;
    }

    setIsLoading(true); 

    try {
      const userData = await loginUser(email, password);
      navigation.replace('AppTabs', {
        screen: 'Beranda',
      });
    } catch (error: any) {
      Alert.alert('Login Gagal', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <BackgroundSiluet />

      <View style={styles.header}>
        <Image
          source={logoSource}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputArea}>
        <CustomTextInput
          iconName="email-outline"
          placeholder="Email anda"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isLoading}
        />
        <CustomTextInput
          iconName="lock-outline"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!isLoading} 
        />
      </View>
      <PrimaryButton
        title="Masuk"
        onPress={handleLogin}
        isLoading={isLoading} 
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum punya akun?</Text>
        <TouchableOpacity
          onPress={() => {
          }}
        >
          <Text style={styles.registerText}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="google" size={24} color="#DB4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Icon name="apple" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  subtitle: {
    color: '#CCC',
    fontSize: 16,
    marginTop: 5,
  },
  inputArea: {
    marginBottom: 20,
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
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
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
