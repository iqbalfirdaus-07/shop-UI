import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Home from './home';
import Kategori from './Kategori';
import DetailProduk from './Detail';
import Keranjang from './keranjang';
import Produk from './produk';
import Profil from './profile';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  const [page, setPage] = useState<'home' | 'kategori' | 'detail' | 'keranjang' | 'produk' | 'profil'>('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'kategori': return <Kategori />;
      case 'detail': return <DetailProduk />;
      case 'keranjang': return <Keranjang />;
      case 'produk': return <Produk />;
      case 'profil': return <Profil />;
      default: return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderPage()}</View>

      {/* Navbar bawah */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setPage('home')} style={styles.iconContainer}>
          <Ionicons name="home-outline" size={24} color={page === 'home' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'home' && styles.activeText]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('kategori')} style={styles.iconContainer}>
          <Ionicons name="grid-outline" size={24} color={page === 'kategori' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'kategori' && styles.activeText]}>Kategori</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('produk')} style={styles.iconContainer}>
          <Ionicons name="pricetag-outline" size={24} color={page === 'produk' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'produk' && styles.activeText]}>Produk</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('detail')} style={styles.iconContainer}>
          <Ionicons name="information-circle-outline" size={24} color={page === 'detail' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'detail' && styles.activeText]}>Detail</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('keranjang')} style={styles.iconContainer}>
          <Ionicons name="cart-outline" size={24} color={page === 'keranjang' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'keranjang' && styles.activeText]}>Keranjang</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage('profil')} style={styles.iconContainer}>
          <Ionicons name="person-circle-outline" size={24} color={page === 'profil' ? '#ff6600' : '#666'} />
          <Text style={[styles.iconText, page === 'profil' && styles.activeText]}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1 },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  iconContainer: { alignItems: 'center' },
  iconText: { fontSize: 12, color: '#666', marginTop: 2 },
  activeText: { color: '#ff6600', fontWeight: '600' },
});
