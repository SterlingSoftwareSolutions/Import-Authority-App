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
import { SelectList } from "react-native-dropdown-select-list";
import { Formik } from "formik";
import { LinearGradient } from "expo-linear-gradient";

function Transaction(props) {
  const navigation = useNavigation();
  const { user, logOut } = useAuth();
  const [bills, setBills] = useState([]);


  {
    /Paid Unpaid/;
  }
  const datasortby = [
    { key: '0', value: 'All' },
    { key: '1', value: 'Paid' },
    { key: '2', value: 'Unpaid' },
  ];



  const fetch_bills = async (status) => {
    const api = await client();
    const response = await api.get('/bills?status=' + status.toLowerCase());
    console.log(response.data.data);
    setBills(response.data.data);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = await client();
        const response = await api.get("/bills");
        setBills(response.data.data);
        // console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  const handleSubmit = (values) => {
    const sortBydata = {
      sortby: values.sortby,
    }
    console.log(sortBydata)
  }

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
        <Formik

          initialValues={{
            sortby: "",
          }}
        >
          {({ handleChange, values, handleSubmit
          }) => (
            <View style={{ flexDirection: 'row', top: 20, marginLeft: 15, justifyContent: 'space-between', width: '93%' }}>
              <SelectList
                placeholder="Sort by"
                value={values.sortby}
                setSelected={handleChange("sortby")}
                data={datasortby}
                save="value"
                boxStyles={{ backgroundColor: 'white', borderColor: 'white' }}
                inputStyles={{ color: colors.primary, fontSize: 15 }}
                dropdownStyles={{ ...styles.dropDownListStyle2 }}
                dropdownTextStyles={{ color: colors.primary }}
                search={false}
                options={datasortby}
                onSelect={() => { fetch_bills(values.sortby) }}
              />
              <View style={{ width: '100%', left: 120, top: 5 }}>
                <LinearGradient
                  colors={["#77B859", "#2DA596"]}
                  locations={[0, 1]}
                  start={{ x: 0.2, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.buttonTransaction}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ViewTransactions")}
                  >
                    <Text style={{ color: 'white', fontWeight: '800' }}>Transaction</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
          )}
        </Formik>
      </View>
      <TransactionLists data={bills} />
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
  dropDownListStyle2: {
    backgroundColor: "white",
    bottom: 22,
    borderRadius: 10,
    borderColor: "white",
  },

  buttonTransaction: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",

  },
})
export default Transaction;
