import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Produk() {
  const [search, setSearch] = useState('');

  const products = [
    { id: '1', name: 'Kaos Polos Premium', price: 59000, image: require('../../assets/images/bajuhitam.jpg') },
    { id: '2', name: 'Celana Jeans Slimfit', price: 150000, image: require('../../assets/images/slimfit.jpg') },
    { id: '3', name: 'Sepatu casual Pria', price: 300000, image: require('../../assets/images/sepatuk.jpg') },
    { id: '4', name: 'Tas Selempang Wanita', price: 89000, image: require('../../assets/images/tas selempang wanita.jpg') },
    { id: '5', name: 'Celana Jeans Slimstraigth', price: 500000, image: require('../../assets/images/celana jeans slimstraigth.jpg') },
    { id: '6', name: 'Sepatu Boot Pria', price: 400000, image: require('../../assets/images/boot pria.jpg') },
    { id: '7', name: 'Tas Unisex', price: 220000, image: require('../../assets/images/tas.jpg') },
    { id: '8', name: 'Topi Pria Skena', price: 110000, image: require('../../assets/images/topi.jpg') },
    { id: '9', name: 'Sepatu Converse 70s', price: 700000, image: require('../../assets/images/convers 70s.jpg') },
    { id: '10', name: 'Kemeja Wispie Wanita', price: 130000, image: require('../../assets/images/wispie.jpg') },
    { id: '11', name: 'HP Samsung S25 Ultra', price: 24000000, image: require('../../assets/images/hp.jpg') },
    { id: '12', name: 'Nasi Goreng Spesial', price: 90000, image: require('../../assets/images/nasi goreng.jpg') },
    { id: '13', name: 'Sepeda Listrik', price: 5000000, image: require('../../assets/images/sepeda.jpg') },
    { id: '14', name: 'Celana Lari Pria', price: 85000, image: require('../../assets/images/celana lari.jpg') },
  ];

  // Filter produk berdasarkan pencarian
  const filteredProducts = products.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="cart-outline" size={17} color="#fff" />
        <Text style={styles.addText}>Tambah Keranjang</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#777" />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari produk..."
          value={search}
          onChangeText={setSearch}
          placeholderTextColor="#888"
        />
      </View>

      <Text style={styles.header}>Produk Terbaru</Text>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
    paddingVertical: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#fff6ee',
    borderRadius: 12,
    width: (width - 45) / 2,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6600',
    marginVertical: 4,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6600',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 6,
  },
  addText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 6,
    fontWeight: '600',
  },
});
