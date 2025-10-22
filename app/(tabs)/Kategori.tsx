import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Kategori() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kategori Produk</Text>

      {/* Kategori 1 */}
      <TouchableOpacity style={styles.categoryItem}>
        <Image
          source={require('../../assets/images/pakaian.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Pakaian</Text>
          <Text style={styles.desc}>Berbagai macam pakaian keren dan nyaman</Text>
        </View>
      </TouchableOpacity>

      {/* Kategori 2 */}
      <TouchableOpacity style={styles.categoryItem}>
        <Image
          source={require('../../assets/images/elektronik.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Elektronik</Text>
          <Text style={styles.desc}>Gadget dan peralatan elektronik terbaru</Text>
        </View>
      </TouchableOpacity>

      {/* Kategori 3 */}
      <TouchableOpacity style={styles.categoryItem}>
        <Image
          source={require('../../assets/images/makanan.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Makanan</Text>
          <Text style={styles.desc}>Camilan lezat dan makanan kekinian</Text>
        </View>
      </TouchableOpacity>

      {/* Kategori 4 */}
      <TouchableOpacity style={styles.categoryItem}>
        <Image
          source={require('../../assets/images/kecantikan.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Kecantikan</Text>
          <Text style={styles.desc}>Produk perawatan wajah dan tubuh</Text>
        </View>
      </TouchableOpacity>

      {/* Kategori 5 */}
      <TouchableOpacity style={styles.categoryItem}>
        <Image
          source={require('../../assets/images/olahraga.jpg')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Olahraga</Text>
          <Text style={styles.desc}>Peralatan dan pakaian olahraga</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    textAlign: 'center',
    marginBottom: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 2,
  },
  image: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  desc: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
  },
});
