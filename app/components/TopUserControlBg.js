import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import { useNavigation } from "@react-navigation/native";

function TopUserControlBg({ children }) {
  const navigation = useNavigation();
  return (
    <LinearGradient style={{ paddingHorizontal: 20, paddingTop: 35, paddingBottom: 20, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      colors={[colors.secondary, colors.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity>
            <Image source={require('../assets/bell.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Transaction')}>
            <Image source={require('../assets/money.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Profile')}>
            <Image source={require('../assets/user.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
})

export default TopUserControlBg;
