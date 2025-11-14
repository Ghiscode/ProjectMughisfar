import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../types/navigation';
import LinearGradient from 'react-native-linear-gradient';

const headerOrnament = require('../assets/images/cardAtas.png');
const cuacaIcon = require('../assets/images/cuaca.png');
const quranIcon = require('../assets/images/quran.png');
const zakatIcon = require('../assets/images/zakat.png');
const dzikirIcon = require('../assets/images/dzikir.png');
const berkahIcon = require('../assets/images/berkah.png');
const ustadIcon = require('../assets/images/ustad.jpeg');

import FeatureCard from '../components/FeatureCard';

type HomeScreenProps = BottomTabScreenProps<HomeTabParamList, 'Beranda'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        source={headerOrnament}
        style={styles.headerOrnament}
        resizeMode="stretch"
      />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.customHeader}>
          <View style={styles.profileSection}>
            <Icon name="account-circle" style={styles.profileIcon} />
            <Text style={styles.profileName}>Mughisfar</Text>
          </View>
          <TouchableOpacity>
            <Icon name="bell-outline" style={styles.loncengIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.prayerCard}>
          <View style={styles.prayerInfo}>
            <Text style={styles.prayerName}>Dzuhur</Text>
            <Text style={styles.prayerTime}>11:44 PM</Text>
            <Text style={styles.dateText}>07/12/2024</Text>
          </View>
          <Image
            source={cuacaIcon}
            style={styles.weatherIcon}
            resizeMode="contain"
          />
        </View>

        <View style={styles.featureGrid}>
          <FeatureCard
            title="Al-Qur'an"
            imageSource={quranIcon}
            onPress={() => {
              navigation.navigate('Al-Quran');
            }}
          />
          <FeatureCard
            title="Zakat"
            imageSource={zakatIcon}
            onPress={() => {
              Alert.alert('Info', 'Fitur ini belum di implementasikan');
            }}
          />
          <FeatureCard
            title="Dzikir"
            imageSource={dzikirIcon}
            onPress={() => {
              Alert.alert('Info', 'Fitur ini belum di implementasikan');
            }}
          />
        </View>

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['#61532C', '#C7AB5B']}
          style={styles.dakwahCard}
        >
          <View style={styles.dakwahTextContainer}>
            <View>
              <Text style={styles.dakwahLabel}>Daily Dakwah</Text>
              <Text style={styles.dakwahTitle}>Berkah Ramadhan</Text>
            </View>
            <View style={styles.authorSection}>
              <Image
                source={ustadIcon}
                style={styles.authorImage}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.authorLabel}>Bersama</Text>
                <Text style={styles.authorName}>Ustad. Hanan Attaki</Text>
              </View>
            </View>
          </View>

          <Image
            source={berkahIcon}
            style={styles.berkahIcon}
            resizeMode="contain"
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#616161',
  },
  headerOrnament: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220,
    width: '100%',
  },
  scrollContent: {
    padding: 20,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 42,
    color: '#FFD700',
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
    marginLeft: 10,
  },
  loncengIcon: {
    fontSize: 26,
    color: '#FFFFFF',
  },
  prayerCard: {
    backgroundColor: '#1E2A3A',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  prayerInfo: { flex: 1 },
  prayerName: {
    color: '#FFD700',
    fontSize: 18,
    fontFamily: 'Gilroy-Bold',
  },
  prayerTime: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: '200',
    marginVertical: 5,
  },
  dateText: { color: '#CCC', fontSize: 14 },
  weatherIcon: { width: 100, height: 100 },
  featureGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dakwahCard: {
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 150,
  },
  dakwahTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  dakwahLabel: {
    color: '#CCC',
    fontSize: 12,
    fontFamily: 'Gilroy-Bold',
    textTransform: 'uppercase',
  },
  dakwahTitle: {
    color: '#FFFFFF',
    fontSize: 29,
    fontFamily: 'Gilroy-Bold',
    marginTop: 5,
  },
  authorSection: { flexDirection: 'row', alignItems: 'center', marginTop: 15 },
  authorImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: '#0A1828',
  },
  authorLabel: { color: '#CCC', fontSize: 10 },
  authorName: { color: '#FFFFFF', fontSize: 12, fontFamily: 'Gilroy-Bold' },
  berkahIcon: { width: 130, height: 150, marginLeft: 10 },
});

export default HomeScreen;