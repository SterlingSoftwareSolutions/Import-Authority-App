import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import TopUserControlBg from '../components/TopUserControlBg';
import { useNavigation } from "@react-navigation/native";
import TransactionComponent from '../components/TransactionComponent';

function Transaction(props) {
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#DCF3E8',
    },
    background: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      maxHeight: 130,
      borderRadius: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginLeft: 10,
    },
    paymenthisorycontainer: {
      alignItems: 'center'
    },
    paymenthistorybox: {
      flexDirection: 'row',
      borderRadius: 10,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      width: '90%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      justifyContent: 'space-between',
      marginTop: 15,

    },
    paymenthistorybtn: {
      color: '#fff',
      backgroundColor: '#FF6D60',
      textAlign: 'center',
      borderRadius: 5,
      padding: 2,
      fontWeight: 900,
      width: 70
    }
  });

  return (
    <View style={styles.container}>

      <TopUserControlBg>
        <View style={{ top: -12 }}>
          <Text style={{ textAlign: 'center', color: '#FA3E3E', fontSize: 29, fontWeight: 'bold' }}>$2900</Text>
          <Text style={{ textAlign: 'center', color: '#C9C9C9', fontSize: 19, fontWeight: 'bold' }}>Total Remaining</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>$9000</Text>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>$700</Text>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Amount</Text>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Paid</Text>
        </View>
      </TopUserControlBg>


      <ScrollView contentContainerStyle={styles.paymenthisorycontainer}>
        <TransactionComponent styles={styles} />

      </ScrollView>
    </View>
  );
}

export default Transaction;
