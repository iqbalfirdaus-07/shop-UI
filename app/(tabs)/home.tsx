import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export default function Home() {
  // nilai awal untuk animasi (transparan)
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // efek animasi ketika komponen muncul
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // 1.5 detik
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Logo dengan animasi fade-in */}
      <Animated.Image
        source={require('../../assets/images/e.png')}
        style={[styles.logo, { opacity: fadeAnim }]}
        resizeMode="contain"
      />

      <Text style={styles.title}>Ucup Toserba </Text>
      <Text style={styles.subtitle}>Selamat datang di toko serba ada milik Ucup!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#99a49c7a' 
  },
  logo: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 20,
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#ff6600' 
  },
  subtitle: { 
    fontSize: 14, 
    color: '#555', 
    marginTop: 10, 
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
