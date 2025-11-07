import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import tipe data dan service
import { SurahData } from '../types/data';
import { HomeTabParamList } from '../types/navigation';
import { getSurahList } from '../api/QuranService'; // Service API yang baru dibuat

// Tipe props untuk Tab Navigator
type QuranScreenProps = BottomTabScreenProps<HomeTabParamList, 'Al-Quran'>;

// Komponen Item Daftar Surah (Kategori 4 & 7: Reusable Component)
const SurahListItem: React.FC<{ surah: SurahData }> = ({ surah }) => {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        /* navigation.navigate('DetailSurah', { surahId: surah.id }) */
      }}
    >
      <View style={styles.numberCircle}>
        <Text style={styles.numberText}>{surah.nomor_surah}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{surah.nama_latin}</Text>
        <Text style={styles.subtitleText}>
          {surah.arti} · {surah.jumlah_ayat} Ayat
        </Text>
      </View>
      <Text style={styles.arabicText}>{surah.nama_arab}</Text>
    </TouchableOpacity>
  );
};

const QuranScreen: React.FC<QuranScreenProps> = () => {
  // Kategori 4: State Management & Hooks
  const [surahList, setSurahList] = useState<SurahData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Kategori 4: useEffect untuk pengambilan data saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const list = await getSurahList();
        setSurahList(list);
        setError(null);
      } catch (err) {
        // Kategori 6: Menangkap error API
        setError('Gagal memuat daftar surah. Cek koneksi atau MockAPI.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Kategori 6: Mengelola loading/error states
  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#FFD700" />
        <Text style={styles.loadingText}>Memuat daftar surah...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Statis Sesuai Desain Figma */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Al-Qur'an</Text>
        <View style={styles.tabContainer}>
          <Text style={styles.activeTab}>Surah</Text>
          <Text style={styles.inactiveTab}>Juz</Text>
          <Text style={styles.inactiveTab}>Disimpan</Text>
        </View>
      </View>

      {/* Daftar Surah (Kategori 3: Fungsionalitas - FlatList) */}
      <FlatList
        data={surahList}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <SurahListItem surah={item} />}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </View>
  );
};

// --- Stylesheets ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1828',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: { color: '#FFF', marginTop: 10 },
  errorText: { color: 'red', fontSize: 16 },
  header: {
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#0A1828',
  },
  headerTitle: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E2A3A',
    borderRadius: 10,
    padding: 5,
  },
  activeTab: {
    backgroundColor: '#FFD700',
    color: '#0A1828',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    fontWeight: 'bold',
  },
  inactiveTab: {
    color: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  // Style untuk List Item
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A3A',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#FFD70050',
  },
  numberCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  numberText: {
    color: '#0A1828',
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
  titleText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    color: '#CCC',
    fontSize: 12,
    marginTop: 2,
  },
  arabicText: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    // Perlu font Arabic yang tepat untuk render yang benar
  },
});

export default QuranScreen;
