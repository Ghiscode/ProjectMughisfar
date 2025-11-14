import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ImageSourcePropType,
  View,
} from 'react-native';

interface FeatureCardProps extends TouchableOpacityProps {
  title: string;
  imageSource: ImageSourcePropType;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  imageSource,
  onPress,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      {...props}
    >
      <Image
        source={imageSource}
        style={styles.featureIcon}
        resizeMode="contain"
      />
      <View style={styles.cardBase}>
        <Text style={styles.featureText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '32%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  featureIcon: {
    width: 70,
    height: 70,
    marginBottom: -30,
    zIndex: 1,
  },
  cardBase: {
    width: '100%',
    backgroundColor: '#1E2A3A',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD70050',
    alignItems: 'center',
    paddingTop: 40, 
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  featureText: {
    color: '#FFFFFF',
    fontSize: 14, 
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FeatureCard;

