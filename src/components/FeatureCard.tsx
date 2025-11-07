import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ImageSourcePropType,
  View, // (1) KITA BUTUH <View> TAMBAHAN
} from 'react-native';

interface FeatureCardProps extends TouchableOpacityProps {
  title: string;
  imageSource: ImageSourcePropType;
}

/**
 * FeatureCard (Komponen Reusable)
 * Versi Final dengan IKON OVERLAP (Mengambang)
 */
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSource,
  onPress,
  style,
  ...props
}) => {
  return (
    // (2) INI ADALAH CONTAINER UTAMA (32% width)
    // Dibuat 'alignItems: center' agar Ikon dan CardBase terpusat
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...props}
    >
      {/* (3) LAYER 1: IKON (DI ATAS) */}
      {/* Ikon ini akan kita dorong ke bawah (secara visual) 
          agar tumpang tindih dengan cardBase */}
      <Image
        source={imageSource}
        style={styles.featureIcon}
        resizeMode="contain"
      />

      {/* (4) LAYER 2: CARD GELAP (DI BAWAH) */}
      {/* Card ini HANYA berisi Teks */}
      <View style={styles.cardBase}>
        <Text style={styles.featureText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // (A) Style Container Utama (Tetap 32%)
  container: {
    width: '32%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  // (B) Style Ikon (DIPERBESAR)
  featureIcon: {
    width: 70, // <-- Diperbesar (dari 60)
    height: 70, // <-- Diperbesar (dari 60)
    // (PENTING) Tarik ke bawah lebih jauh
    marginBottom: -30, // <-- Disesuaikan (dari -25)
    zIndex: 1,
  },

  // (C) Style Card Gelap (Base)
  cardBase: {
    width: '100%',
    backgroundColor: '#1E2A3A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD70050',
    alignItems: 'center',

    // (PENTING) Beri padding atas lebih banyak
    paddingTop: 40, // (30 overlap + 10 jarak)

    paddingBottom: 15, // (Beri padding bawah lebih)
    paddingHorizontal: 5,
  },

  // (D) Style Teks (DIPERBESAR)
  featureText: {
    color: '#FFFFFF',
    fontSize: 14, // <-- Diperbesar (dari 12)
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FeatureCard;

