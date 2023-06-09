import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import TopUserControlBg from '../components/TopUserControlBg';


function Transaction(props) {
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Amount</Text>
          <Text style={{ textAlign: 'center', fontSize: 10, color: '#FFFFFF' }}>Total Paid</Text>
        </View>
      </TopUserControlBg>
   
   {/* Filtering dropdown should be added */}
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 }}>
        <Text style={{ textAlign: 'left', fontSize: 15, color: '#000000', fontWeight: 600, top: 10 }}>Sort By Unpiad </Text>
        <Text style={{ textAlign: 'left', fontSize: 15, color: '#000000', fontWeight: 600, top: 10 }}>Remaining Payments: 2/5</Text>
      </View> */}

      <ScrollView contentContainerStyle={styles.paymenthisorycontainer}>
        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 2 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#57C590', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#57C590', fontWeight: 'bold' }}>$0</Text>
              </View>
            </View>
          </View>



        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 2 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#57C590', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#57C590', fontWeight: 'bold' }}>$0</Text>
              </View>
            </View>
          </View>



        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 2 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#57C590', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#57C590', fontWeight: 'bold' }}>$0</Text>
              </View>
            </View>
          </View>



        </View>


        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 2 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#57C590', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#57C590', fontWeight: 'bold' }}>$0</Text>
              </View>
            </View>
          </View>



        </View>
        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.paymenthistorybox}>

          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]} />

            <View style={{ paddingLeft: 10 }}>
              <Text>12345GMh&45</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Total:</Text>
                <Text>$1800</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>Paid:</Text>
                <Text>$350</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold', paddingRight: 10 }}>Balance:</Text>
                <Text style={{ color: '#FF6D60', fontWeight: 'bold' }}>$1450</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </View>

  );
}


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
    marginBottom: 10
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
export default Transaction;