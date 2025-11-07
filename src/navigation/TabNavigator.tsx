import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// (1) IMPORT 4 SCREEN UTAMA ANDA
import HomeScreen from '../screens/HomeScreen';
import QuranScreen from '../screens/QuranScreen';
// import ZakatScreen from '../screens/ZakatScreen';
// import DzikirScreen from '../screens/DzikirScreen';

// (2) PASTIKAN TIPE NAVIGASI ANDA KEMBALI KE 4 TOMBOL
// (Cek 'src/types/navigation.ts' Anda)
import { HomeTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      // (3) STYLING DATAR & GELAP (SESUAI FIGMA)
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD700', // Emas (Aktif)
        tabBarInactiveTintColor: '#CCCCCC', // Abu-abu (Tidak Aktif)

        tabBarStyle: {
          backgroundColor: '#0A1828', // Latar Belakang Gelap
          borderTopWidth: 0, // Hilangkan garis atas
          height: 60,
          paddingBottom: 5,
        },

        // Logika untuk 4 ikon Anda
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'home-outline';

          if (route.name === 'Beranda') {
            iconName = 'home-outline';
          } else if (route.name === 'Al-Quran') {
            iconName = 'book-open-outline';
          } else if (route.name === 'Zakat') {
            iconName = 'currency-usd';
          } else if (route.name === 'Dzikir') {
            iconName = 'beads';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* (4) DAFTAR 4 TAB ANDA */}
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Al-Quran" component={QuranScreen} />
      {/* <Tab.Screen name="Zakat" component={ZakatScreen} />
      <Tab.Screen name="Dzikir" component={DzikirScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
