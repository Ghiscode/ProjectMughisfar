import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HomeTabParamList } from '../types/navigation';

const quranIllustration = require('../assets/images/quran.png');
import { SurahData } from '../types/data';
import { getSurahList } from '../api/QuranService';
import SurahListItem from '../components/ListSurah';

type QuranScreenProps = BottomTabScreenProps<HomeTabParamList, 'Al-Quran'>;

const QuranScreen: React.FC<QuranScreenProps> = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.navigate('Beranda');
  };

  const showNotImplementedAlert = () => {
    Alert.alert('Info', 'Fitur ini belum di implementasikan');
  };

  const [surahList, setSurahList] = useState<SurahData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const list = await getSurahList();
        setSurahList(list);
        setError(null);
      } catch (err) {
        setError('Gagal memuat daftar surah. Cek MockAPI/Koneksi.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  const renderItem = ({ item }: { item: SurahData }) => (
    <SurahListItem surah={item} onPress={() => {}} />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="chevron-left" style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Al-Qur'an</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <View style={styles.lastReadCard}>
        <View style={styles.lastReadInfo}>
          <Text style={styles.lastReadLabel}>Terakhir dibaca</Text>
          <Text style={styles.lastReadSurah}>An-Naba'</Text>
          <TouchableOpacity style={styles.lastReadButton}>
            <Text style={styles.lastReadButtonText}>Kembali membaca</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={quranIllustration}
          style={styles.lastReadImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.segmentControl}>
        <TouchableOpacity style={[styles.segmentButton, styles.segmentActive]}>
          <Text style={[styles.segmentText, styles.segmentTextActive]}>
            Surah
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.segmentButton}
          onPress={showNotImplementedAlert}
        >
          <Text style={styles.segmentText}>Juz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.segmentButton}
          onPress={showNotImplementedAlert}
        >
          <Text style={styles.segmentText}>Disimpan</Text>
        </TouchableOpacity>
      </View>
      
      {isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size="large"
          color="#FFD700"
        />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={surahList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A1828',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerIcon: {
    fontSize: 32,
    color: '#FFF',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 22,
    fontFamily: 'Gilroy-Bold',
  },
  headerRightPlaceholder: {
    width: 32,
  },
  lastReadCard: {
    backgroundColor: '#FED769',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  lastReadInfo: {
    flex: 1,
  },
  lastReadLabel: {
    color: '#0A1828',
    fontSize: 12,
    textTransform: 'uppercase',
    opacity: 0.8,
  },
  lastReadSurah: {
    color: '#0A1828',
    fontSize: 20,
    fontFamily: 'Gilroy-Bold',
    marginVertical: 5,
  },
  lastReadButton: {
    backgroundColor: '#0A1828',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  lastReadButtonText: {
    color: '#FED769',
    fontSize: 12,
    fontWeight: 'bold',
  },
  lastReadImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: '#1E2A3A',
    borderRadius: 10,
    marginBottom: 15,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
  segmentActive: {
    backgroundColor: '#FFD700',
  },
  segmentText: {
    color: '#FFF',
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
  },
  segmentTextActive: {
    color: '#0A1828',
  },
  list: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default QuranScreen;
