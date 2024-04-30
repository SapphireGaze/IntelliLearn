import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function TestScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('./assets/profile.png')}  
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Text>What you will learn today?</Text>
      </View>

      {/* Navigation bar at the bottom with icons */}
      <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Data')}>
        <Image source={require('./assets/data.png')} style={styles.navIcon} />
        <Text style={[styles.navText, styles.navTextDarkBlue]}>Data</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('FlashCards')}>
          <Image source={require('./assets/flashcards.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>FlashCards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBis} onPress={() => console.log('Scan')}>
          {/* <Image source={require('./assets/scan.png')} style={styles.navIcon} /> */}
          <Text style={styles.navText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notes')}>
          <Image source={require('./assets/notes.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Connect')}>
          <Image source={require('./assets/connect.png')} style={styles.navIcon} />
          <Text style={[styles.navText, styles.navTextDarkBlue]}>Connect</Text>
        </TouchableOpacity>

      </View>

      {/* Rounded square above the "Scan" button with an image */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate('Scan')}  
      >
        <Image source={require('./assets/scan.png')} style={styles.scanImage} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F3F6FA', 
    width: '100%',  
  },
  headerIcon: {
    width: 45,
    height: 45,
  },

  headerText: {
    fontSize: 24, 
    color: '#0D47A1', 
    fontWeight: 'bold', 
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },

  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    height: 80, 
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 30,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2, 
  },
  navBis: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 2, 
    paddingTop: 40,
    bottom: 5,
  },
  navIcon: {
    width: 30, 
    height: 30, 
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5, 
    color: '#5F7AF9',
  },
  navTextDarkBlue: {
    color: '#5F7AF9', 
  },
  scanButton: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    alignItems: 'center', 
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#5F7AF9',
    marginBottom: 37,
  },  
  scanImage: {
    width: 40,
    height: 40,
  },

  square: {
    width: 160, 
    height: 130, 
    borderRadius: 17, 
    backgroundColor: '#FFFFFF', 
    justifyContent: 'center',  
    alignItems: 'center',      
    padding: 10,               
  },

  infoAndProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
  },

  shortCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    width: '50%',  
    marginHorizontal: -10, 
    bottom: -30,
  },
  cardTitle: {
    fontSize: 14,
    color: '#0D47A1',
    marginBottom: 5,
  },
});