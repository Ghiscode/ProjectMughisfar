import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SurahData } from '../types/data';

interface SurahListItemProps {
  surah: SurahData;
  onPress: () => void;
}
const SurahListItem: React.FC<SurahListItemProps> = ({ surah, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.numberCircle}>
        <Text style={styles.numberText}>{surah.nomor_surah}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>{surah.nama_latin}</Text>
      </View>
      <Text style={styles.arabicText}>{surah.nama_arab}</Text>
      <Icon name="play-circle-outline" style={styles.playIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E2A3A',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFD70050',
    marginBottom: 25,
  },
  numberCircle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  numberText: {
    color: '#0A1828',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
  },
  arabicText: {
    color: '#FFD700',
    fontSize: 20,
    fontFamily: 'Gilroy-Bold',
    marginHorizontal: 10,
  },
  playIcon: {
    fontSize: 24,
    color: '#FFD700',
  },
});

export default SurahListItem;
