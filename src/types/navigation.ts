import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeTabParamList = {
  Beranda: undefined; 
  'Al-Quran': undefined; 
};

export type RootStackParamList = {
  Splash: undefined; 
  Login: undefined; 
  AppTabs: NavigatorScreenParams<HomeTabParamList>;
  DetailSurah: { surahId: number }; 
};

export type AppRoutes = keyof RootStackParamList;
export type HomeTabRoutes = keyof HomeTabParamList;
