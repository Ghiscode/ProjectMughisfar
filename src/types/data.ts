// src/types/navigation.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeTabParamList = {
  Beranda: undefined; 
  Profile: undefined; 
};

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  AppTabs: NavigatorScreenParams<HomeTabParamList>;
  DetailSurah: { surahId: number };
};

export interface SurahData {
  id: number;
  nomor_surah: number;
  nama_latin: string;
  nama_arab: string;
}

export interface UserData {
  id: number | string;
  email: string;
  password: string;
}

export type AppRoutes = keyof RootStackParamList;
export type HomeTabRoutes = keyof HomeTabParamList;
