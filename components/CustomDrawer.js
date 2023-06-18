import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomDrawer = ({ isOpen, onClose }) => {
  const handleDrawerItemPress = (screenName) => {
    // Handle navigation to the selected screen
    console.log('Navigating to', screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleDrawerItemPress('Dashboard')}>
        <Text style={styles.drawerItemText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleDrawerItemPress('Favorites')}>
        <Text style={styles.drawerItemText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleDrawerItemPress('Mission')}>
        <Text style={styles.drawerItemText}>Mission</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleDrawerItemPress('Contact')}>
        <Text style={styles.drawerItemText}>Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleDrawerItemPress('User')}>
        <Text style={styles.drawerItemText}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={onClose}>
        <Text style={styles.drawerItemText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  drawerItem: {
    marginBottom: 16,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CustomDrawer;
