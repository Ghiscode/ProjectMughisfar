import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// --- (ADAPTASI 1: IMPORT LinearGradient) ---
import LinearGradient from 'react-native-linear-gradient';

// (2) IMPORT ASET GAMBAR
const headerOrnament = require('../assets/images/cardAtas.png');
const cuacaIcon = require('../assets/images/cuaca.png');
const quranIcon = require('../assets/images/quran.png');
const zakatIcon = require('../assets/images/zakat.png');
const dzikirIcon = require('../assets/images/dzikir.png');
const berkahIcon = require('../assets/images/berkah.png');
const ustadIcon = require('../assets/images/ustad.jpeg');

// (4) IMPORT KOMPONEN REUSABLE BARU
import FeatureCard from '../components/FeatureCard';

/**
 * HomeScreen (Versi Reset - Fokus hingga 3 Kartu Fitur)
 */
const HomeScreen: React.FC = () => {
  return (
    // (A) LAYER 1: BACKGROUND FULL HITAM
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* (B) LAYER 2: ORNAMEN EMAS */}
      <Image
        source={headerOrnament}
        style={styles.headerOrnament}
        resizeMode="stretch"
      />

      {/* (C) KONTEN YANG BISA DI-SCROLL */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* (D) LAYER 3: HEADER KUSTOM (User, Teks, Lonceng) */}
        <View style={styles.customHeader}>
          <View style={styles.profileSection}>
            <Icon name="account-circle" style={styles.profileIcon} />
            <Text style={styles.profileName}>Mughisfar</Text>
          </View>
          <TouchableOpacity>
            <Icon name="bell-outline" style={styles.loncengIcon} />
          </TouchableOpacity>
        </View>

        {/* (Teks Sapaan SUDAH DIHAPUS sesuai kode Anda) */}

        {/* (F) Kartu Waktu Sholat (Layer 5) */}
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

        {/* (G) Kartu Fitur (Layer 6) - 3 Kartu per Baris */}
        <View style={styles.featureGrid}>
          <FeatureCard
            title="Al-Qur'an"
            imageSource={quranIcon}
            onPress={() => {
              /* TODO: Navigasi */
            }}
          />
          <FeatureCard
            title="Zakat"
            imageSource={zakatIcon}
            onPress={() => {
              /* TODO: Navigasi */
            }}
          />
          <FeatureCard
            title="Dzikir"
            imageSource={dzikirIcon}
            onPress={() => {
              /* TODO: Navigasi */
            }}
          />
        </View>

        {/* --- (ADAPTASI 2: GANTI <View> DENGAN <LinearGradient>) --- */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['#61532C', '#C7AB5B']} // Warna gradasi emas
          style={styles.dakwahCard}
        >
          {/* Sisi Kiri (Teks & Author) */}
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

          {/* Sisi Kanan (Gambar Kalender) */}
          <Image
            source={berkahIcon}
            style={styles.berkahIcon}
            resizeMode="contain"
          />
        </LinearGradient>
        {/* --- END ADAPTASI 2 --- */}
      </ScrollView>
    </View>
  );
};

// (H) STYLESHEET
const styles = StyleSheet.create({
  // (Style LAMA: Background, Ornamen, Header Kustom)
  container: {
    flex: 1,
    backgroundColor: '#616161', // (Sesuai kode Anda)
  },
  headerOrnament: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 220, // Sesuai style Anda
    width: '100%',
  },
  scrollContent: {
    padding: 20, // Padding global untuk konten
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60, // Sesuai style Anda
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

  // (Style Teks Sapaan SUDAH DIHAPUS sesuai kode Anda)

  // (Style LAMA: Kartu Waktu Sholat)
  prayerCard: {
    backgroundColor: '#1E2A3A',
    borderRadius: 20, // Sesuai style Anda
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
    fontSize: 32, // Sesuai style Anda
    fontWeight: '200',
    marginVertical: 5,
  },
  dateText: { color: '#CCC', fontSize: 14 },
  weatherIcon: { width: 100, height: 100 },

  // (Style LAMA: Grid 3 Kartu Fitur)
  featureGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  // --- (ADAPTASI 3: HAPUS backgroundColor DARI dakwahCard) ---
  dakwahCard: {
    // backgroundColor: '#1E2A3A', // <-- HAPUS WARNA SOLID INI
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 150,
  },
  // --- END ADAPTASI 3 ---

  // (Style LAMA: Sisa style dakwahCard)
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
    borderRadius: 15,
    marginRight: 10,
    backgroundColor: '#0A1828',
  },
  authorLabel: { color: '#CCC', fontSize: 10 },
  authorName: { color: '#FFFFFF', fontSize: 12, fontFamily: 'Gilroy-Bold' },
  berkahIcon: { width: 130, height: 150, marginLeft: 10 },
});

export default HomeScreen;
