import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Keranjang() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Kaos Hitam Polos', price: 59000, qty: 1, image: require('../../assets/images/bajuhitam.jpg') },
    { id: 2, name: 'Celana Jeans Slimfit', price: 150000, qty: 1, image: require('../../assets/images/slimfit.jpg') },
    { id: 3, name: 'Sepatu Kasual Pria', price: 300000, qty: 1, image: require('../../assets/images/sepatuk.jpg') },
    { id: 4, name: 'Tas Selempang Wanita', price: 89000, qty: 1, image: require('../../assets/images/tas selempang wanita.jpg') },
    { id: 5, name: 'boot pria', price: 400000, qty: 1, image: require('../../assets/images/boot pria.jpg') },
  ]);

  const updateQty = (id: number, type: 'plus' | 'minus') => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === 'plus' ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang Belanja </Text>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {cart.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Rp {item.price.toLocaleString('id-ID')}</Text>

              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQty(item.id, 'minus')} style={styles.qtyButton}>
                  <Text style={styles.qtyText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyCount}>{item.qty}</Text>

                <TouchableOpacity onPress={() => updateQty(item.id, 'plus')} style={styles.qtyButton}>
                  <Text style={styles.qtyText}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.subtotal}>Subtotal: Rp {(item.price * item.qty).toLocaleString('id-ID')}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: Rp {total.toLocaleString('id-ID')}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 60, paddingHorizontal: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#ff6600', textAlign: 'center', marginBottom: 20 },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  itemImage: { width: width * 0.3, height: width * 0.3, borderRadius: 8 },
  itemDetails: { flex: 1, paddingLeft: 10, justifyContent: 'space-between' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemPrice: { color: '#ff6600', fontWeight: '600', marginTop: 4 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  qtyButton: { backgroundColor: '#ff6600', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 5 },
  qtyText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  qtyCount: { marginHorizontal: 12, fontSize: 16 },
  subtotal: { marginTop: 8, fontWeight: '600', color: '#333' },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 10,
  },
  totalText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  checkoutButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  checkoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
