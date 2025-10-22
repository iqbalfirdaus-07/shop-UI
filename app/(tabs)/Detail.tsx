import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Detail() {
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        {/* Gambar Produk dari lokal */}
        <Image
          source={require('../../assets/images/bajuhitam.jpg')}
          style={[styles.productImage, { height: width * 0.9 }]}
          resizeMode="cover"
        />

        {/* Info Produk */}
        <View style={styles.infoContainer}>
          <Text style={styles.productName}>Kaos Polos Premium - Lengan Pendek</Text>
          <Text style={styles.price}>Rp 59.000</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.rating}>⭐ 4.8</Text>
            <Text style={styles.sold}>| Terjual 2.3RB</Text>
          </View>

          <Text style={styles.sectionTitle}>Deskripsi Produk</Text>
          <Text style={styles.description}>
            Kaos polos berbahan katun premium yang lembut, ringan, dan nyaman digunakan sepanjang hari. 
            Cocok untuk aktivitas santai maupun harian, tersedia dalam berbagai ukuran dan warna.
          </Text>

          <View style={styles.detailBox}>
            <Text style={styles.detailItem}>📦 Stok: 143 pcs</Text>
            <Text style={styles.detailItem}>🚚 Gratis Ongkir Seluruh Indonesia</Text>
            <Text style={styles.detailItem}>🏬 Penjual: Ucup Toserba Official Store</Text>
          </View>
        </View>
      </ScrollView>

      {/* Tombol Aksi */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>Tambah ke Keranjang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyText}>Beli Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#ffffffff' 
  },
  scrollContent: { 
    paddingBottom: 100, 
  },
  productImage: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  infoContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  productName: {
    fontSize: width < 380 ? 18 : 22,
    fontWeight: 'bold',
    color: '#222',
  },
  price: {
    fontSize: width < 380 ? 20 : 24,
    fontWeight: 'bold',
    color: '#ff6600',
    marginVertical: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    color: '#333',
    fontWeight: '600',
  },
  sold: {
    color: '#777',
    marginLeft: 6,
  },
  sectionTitle: {
    fontSize: width < 380 ? 15 : 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 6,
    color: '#333',
  },
  description: {
    fontSize: width < 380 ? 13 : 15,
    color: '#555',
    lineHeight: 20,
  },
  detailBox: {
    marginTop: 20,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  detailItem: {
    fontSize: width < 380 ? 12 : 14,
    color: '#444',
    marginVertical: 3,
  },
  bottomBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  cartButton: {
    flex: 1,
    backgroundColor: '#ffe6cc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height < 700 ? 10 : 14,
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#ff6600',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height < 700 ? 10 : 14,
  },
  cartText: {
    color: '#ff6600',
    fontWeight: 'bold',
    fontSize: width < 380 ? 12 : 14,
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width < 380 ? 12 : 14,
  },
});
