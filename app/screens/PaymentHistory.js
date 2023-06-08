import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

 
 function PaymentHistory(props) {
  const progress1 = 1; 
  const progress2 = 1;
  const progress3 = 0;

  const greenColor = "#7DBA54";
  const blueColor = "#1FA1A3";

  const [progressText1, setProgressText1] = React.useState('');
  const [progressText2, setProgressText2] = React.useState('');
  const [progressText3, setProgressText3] = React.useState('');

  const [switch1Value, setSwitch1Value] = React.useState(false);
  const [switch2Value, setSwitch2Value] = React.useState(false);

  const handleSwitch1Toggle = () => {
    setSwitch1Value((prevValue) => !prevValue);
  };

  const handleSwitch2Toggle = () => {
    setSwitch2Value((prevValue) => !prevValue);
  };
  return (
    <SafeAreaView style={styles.container}>

    <LinearGradient style={{ paddingHorizontal: 20, paddingTop: 35, paddingBottom: 30, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      colors={[greenColor, blueColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => handleNotificationPress()} style={styles.iconButton}>
            <Image source={require('../assets/bell.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNotificationPress()} style={styles.iconButton}>
            <Image source={require('../assets/money.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNotificationPress()} style={styles.iconButton}>
            <Image source={require('../assets/user.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
          </TouchableOpacity>
        </View>

      </View>


      <View>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF', marginTop: 12 }}>Payment History</Text>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' }}>
        <Text>Search By Date</Text>
        <TouchableOpacity onPress={() => handleTransactionPress()}>
          <Image source={require('../assets/search.png')} style={[{ width: 32, height: 32, tintColor: '#fff' }]} />
        </TouchableOpacity>

      </View>
    </LinearGradient>



    {/* BOX 1*/}

    <ScrollView contentContainerStyle={styles.transactionBoxContainer}>
      <Text style={styles.transactionCategory}>Today</Text>

      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>


      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>

      <Text style={styles.transactionCategory}>Today</Text>

      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>

      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>

      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>
      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>
      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>
      <View style={styles.transactionBox}>
        <View>
          <Text>4242 4242 42424 4242</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>**** **** **** 4242</Text>
          <Text style={{ color: greenColor, fontWeight: 'bold' }}>$150</Text>
        </View>
        <Text style={{ fontSize: 12 }}>Just Now</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
 }
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#DCF3E8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  icon: {
    marginLeft: 10,
  },
  data_and_searchicon: {

    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '100%'
  },
  transcationtoday: {
    marginTop: 10,
  },
  transactionCategory: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#555',
    marginTop: 5,
    marginBottom: 10
  },
  transactionBoxContainer: {
    marginHorizontal: 20,
    marginTop: 25
  },
  transactionBox: {
    borderRadius: 10,
    backgroundColor: '#F1FAF6',
    padding: 20,
    width: '100%',
    marginBottom: 10,
    borderLeftWidth: 10,
    borderStartColor: '#8FBF45',
    borderEndColor: 'blue'
  },
});
 export default PaymentHistory;