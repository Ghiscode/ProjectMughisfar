// src/types/navigation.ts

import { NavigatorScreenParams } from '@react-navigation/native';

// 1. Definisikan tipe untuk Bottom Tab Navigator di Home Page
export type HomeTabParamList = {
  Beranda: undefined; // Rute Home Screen utama
  'Al-Quran': undefined; // Rute Daftar Surah
  Zakat: undefined;
  Dzikir: undefined;
};

// 2. Definisikan tipe untuk Stack Navigator utama
export type RootStackParamList = {
  Splash: undefined; // Rute Splash Screen
  Login: undefined; // Rute Login Screen

  // Menggunakan NavigatorScreenParams untuk menampung Tab Navigator
  AppTabs: NavigatorScreenParams<HomeTabParamList>;

  // Contoh Rute Detail (jika nanti dibutuhkan)
  DetailSurah: { surahId: number }; // Contoh rute yang membawa parameter
};

// Definisikan rute yang akan digunakan
export type AppRoutes = keyof RootStackParamList;
export type HomeTabRoutes = keyof HomeTabParamList;
