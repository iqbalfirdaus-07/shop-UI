import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Produk() {
  const products = [
    {
      id: '1',
      name: 'Kaos Polos Premium',
      price: 59000,
      image: require('../../assets/images/bajuhitam.jpg'),
    },
    {
      id: '2',
      name: 'Celana Jeans Slimfit',
      price: 150000,
      image: require('../../assets/images/slimfit.jpg'),
    },
    {
      id: '3',
      name: 'Sepatu casual Pria',
      price: 300000,
      image: require('../../assets/images/sepatuk.jpg'),
    },
    {
      id: '4',
      name: 'Tas Selempang Wanita',
      price: 89000,
      image: require('../../assets/images/tas selempang wanita.jpg'),
    },
    {
      id: '5',
      name: 'celana jeans slimstraigth',
      price: 500000,
      image: require('../../assets/images/celana jeans slimstraigth.jpg'),
    },
    {
      id: '6',
      name: 'sepatu boot pria',
      price: 400000,
      image: require('../../assets/images/boot pria.jpg'),
    },
    {
      id: '7',
      name: 'tas unisex',
      price: 220000,
      image: require('../../assets/images/tas.jpg'),
    },
    {
      id: '8',
      name: 'Topi pria skena',
      price: 110000,
      image: require('../../assets/images/topi.jpg'),
    },
    {
      id: '9',
      name: 'Sepatu convers 70 s',
      price: 700000,
      image: require('../../assets/images/convers 70s.jpg'),
    },
    {
      id: '10',
      name: 'kemeja wispie wanita',
      price: 130000,
      image: require('../../assets/images/wispie.jpg'),
    },
    {
      id: '11',
      name: 'hp samsung s25 ultra',
      price: 24000000,
      image: require('../../assets/images/hp.jpg'),
    },
    {
      id: '12',
      name: 'nasi goreng spesial',
      price: 90000,
      image: require('../../assets/images/nasi goreng.jpg'),
    },
    {
      id: '13',
      name: 'sepeda listrik',
      price: 5000000,
      image: require('../../assets/images/sepeda.jpg'),
    },
    {
      id: '14',
      name: 'celana lari pria',
      price: 85000,
      image: require('../../assets/images/celana lari.jpg'),
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Rp {item.price.toLocaleString('id-ID')}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="cart-outline" size={17} color="#fff" />
        <Text style={styles.addText}>tambah keranjang</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produk Terbaru </Text>

      <FlatList
        data={products}
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
