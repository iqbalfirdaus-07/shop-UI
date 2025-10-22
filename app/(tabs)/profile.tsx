import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profil</Text>

      {/* Foto Profil */}
      <View style={styles.profileSection}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/ucup.jpeg')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="pencil" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Iqbal Firdaus</Text>
        <Text style={styles.role}>iqbalfirdaus@gmail.com</Text>
      </View>

      {/* Menu Profil */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="person-outline" size={22} color="#ff6600" />
            <Text style={styles.menuText}>Edit Profil</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#bbb" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="notifications-outline" size={22} color="#ff6600" />
            <Text style={styles.menuText}>Notifikasi</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#bbb" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="location-outline" size={22} color="#ff6600" />
            <Text style={styles.menuText}>alamat</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#bbb" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Ionicons name="lock-closed-outline" size={22} color="#ff6600" />
            <Text style={styles.menuText}>ubah password</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#bbb" />
        </TouchableOpacity>
      </View>

      {/* Tombol Sign Out */}
      <TouchableOpacity style={styles.signOutButton}>
        <Ionicons name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.signOutText}>keluar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff6600',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 25,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
  },
  editIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#ff6600',
    borderRadius: 15,
    padding: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff6600',
    marginTop: 10,
  },
  role: {
    color: '#777',
    fontSize: 14,
  },
  menuContainer: {
    width: '90%',
    borderRadius: 12,
    backgroundColor: '#fff6ee',
    paddingVertical: 10,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomColor: '#f2d2b0',
    borderBottomWidth: 0.6,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#ff6600',
    marginLeft: 10,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6600',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});
