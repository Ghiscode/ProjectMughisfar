import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import QuranScreen from '../screens/QuranScreen';
import { HomeTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Beranda"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFD700',
        tabBarInactiveTintColor: '#CCCCCC',

        tabBarStyle:
          route.name === 'Al-Quran'
            ? { display: 'none' }
            : {
                backgroundColor: '#616161',
                borderTopWidth: 2,
                borderTopColor: '#FFD700',
                height: 60,
                paddingBottom: 5,
              },

        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          if (route.name === 'Beranda') {
            iconName = 'home-outline';
          } else if (route.name === 'Al-Quran') {
            iconName = 'book-open-outline';
          } else {
            iconName = 'help-circle';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* (7) DAFTAR HANYA 2 TAB ANDA */}
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Al-Quran" component={QuranScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
