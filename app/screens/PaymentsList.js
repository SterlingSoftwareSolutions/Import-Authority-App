import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import TopUserControlBg from '../components/TopUserControlBg';
import { useNavigation } from "@react-navigation/native";
import TransactionComponent from '../components/TransactionLists';
import TransactionListComponent from '../components/TransactionLists';
import ApplicationLists from '../components/ApplicationLists';
import TransactionLists from '../components/TransactionLists';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";
import client from "../api/client";
import { CDN_URL } from '@env'

function Transaction(props) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [bills, setBills] = useState([]);
  const data = [
    {
      id: 1,
      chassis_no: "ABC123",
      build_month: "07",
      build_year: "2022",
      odo_meter: "5000",
      assets: [
        {
          asset_type: "img_front_right",
          file_type: "png",
          location: "carpay",
        },
      ],
    },
    {
      id: 2,
      chassis_no: "XYZ789",
      build_month: "05",
      build_year: "2021",
      odo_meter: "8000",
      assets: [
        {
          asset_type: "img_front_right",
          file_type: "jpg",
          location: "carpay.png",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/bills");
        setBills(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TopUserControlBg>
        <View style={{ top: -12 }}>
          <Text style={{ textAlign: 'center', color: '#FA3E3E', fontSize: 29, fontWeight: 'bold' }}>${bills.total - bills.paid}</Text>
          <Text style={{ textAlign: 'center', color: '#C9C9C9', fontSize: 19, fontWeight: 'bold' }}>Total Remaining</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>${bills.total}</Text>
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>${bills.paid}</Text>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Amount</Text>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Paid</Text>
        </View>
      </TopUserControlBg>

      <View>
        <TransactionLists data={bills} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymenthisorycontainer: {
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#DCF3E8',
  },
})

export default Transaction;
