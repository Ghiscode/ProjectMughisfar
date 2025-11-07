// src/types/navigation.ts
import { NavigatorScreenParams } from '@react-navigation/native';

// (1) UBAH TIPE DATA INI
// Ganti dari (Beranda, Al-Quran, Zakat, Dzikir)
// Menjadi (Beranda, Search, Profile)
export type HomeTabParamList = {
  Beranda: undefined; // (Ikon Home Kiri)
  Search: undefined; // (Ikon Search Tengah)
  Profile: undefined; // (Ikon Profile Kanan)
};

// (2) Sisanya tetap sama
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  AppTabs: NavigatorScreenParams<HomeTabParamList>;
  DetailSurah: { surahId: number };
};

export type AppRoutes = keyof RootStackParamList;
export type HomeTabRoutes = keyof HomeTabParamList;
