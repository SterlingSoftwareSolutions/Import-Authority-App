import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { color } from 'react-native-elements/dist/helpers';
import colors from '../config/colors';
import { useNavigation } from "@react-navigation/native";



function PaymentScreen(props) {
  const navigation = useNavigation();

  const progress1 = 1; // Set the progress value between 0 and 1
  const progress2 = 1;
  const progress3 = 1;

  

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
        <View style={styles.container}>
        <LinearGradient
          colors={[colors.secondary, colors.primary]} // Set the starting and ending colors for the gradient
          style={styles.background}
        >
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => handleNotificationPress()} style={styles.iconButton}>
                <Image source={require('../assets/bell.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
                {/* <Ionicons name="notifications" size={24} color="#fff" style={styles.icon} /> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleLogoutPress()} style={styles.iconButton}>
                <Image source={require('../assets/money.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
                {/* <Ionicons name="log-out" size={24} color="#fff" style={styles.icon} /> */}
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleTransactionPress()} style={styles.iconButton}>
                <Image source={require('../assets/user.png')} style={[styles.icon, { width: 24, height: 24, tintColor: '#fff' }]} />
                {/* <Ionicons name="swap-horizontal" size={24} color="#fff" style={styles.icon} /> */}
              </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.progressContainer}>
            <View style={styles.progressBarWrapper}>
              <TextInput
                style={[styles.headingText, styles.progressText]}
                value={progressText1}
                onChangeText={setProgressText1}
                placeholder="Car Info"
                placeholderTextColor="#fff"
              />
              <ProgressBar progress={progress1} color="#000" style={styles.progressBar1} />
            </View>
  
            <View style={styles.progressBarWrapper}>
              <TextInput
                style={[styles.headingText, styles.progressText]}
                value={progressText2}
                onChangeText={setProgressText2}
                placeholder="Documents"
                placeholderTextColor="#fff"
              />
              <ProgressBar progress={progress2} color="#000" style={styles.progressBar2} />
            </View>
  
            <View style={styles.progressBarWrapper}>
              <TextInput
                style={[styles.headingText, styles.progressText]}
                value={progressText3}
                onChangeText={setProgressText3}
                placeholder="Payment"
                placeholderTextColor="#fff"
              />
              <ProgressBar progress={progress3} color="#000" style={styles.progressBar3} />
            </View>
          </View>
  
          <SafeAreaView style={styles.back_draft}>
            
          <View style={styles.boxContainer}>
    <View style={styles.box}>
      {/* Content inside the box */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <Image source={require('../assets/card.png')}></Image>
      <Text>5/28</Text>
      </View> 
  
    <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%',  marginBottom: 25 }}>
        <Text>****</Text>
        <Text>****</Text>
        <Text>****</Text>
        <Text>8250</Text>
    </SafeAreaView>
    <Text style={{...styles.row3_1, marginBottom: 10}}>RAKESH PRADHAN</Text>
    </View>
  </View>
  
  
  <View style={{...styles.boxContainer2, zIndex: -1,}}>
              <View style={{...styles.box, paddingTop: 35, }}>
                {/* Content inside the box */}
                <View style={{...styles.paymentinfoRow}}>
                <Text style={styles.paymentinfo1}>Company</Text>
                <Text style={styles.paymentinfo2}>Import Authority</Text>
                </View>
                <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Reference</Text>
                <Text style={styles.paymentinfo2}>ADVI41_2015201</Text>
                </View>
                <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Service</Text>
                <Text style={styles.paymentinfo2}>Vehicle Import</Text>
                </View>
                <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Total Amount</Text>
                <Text style={styles.paymentinfo2}>$400</Text>
                </View >
                <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Advance Amount</Text>
                <Text style={styles.paymentinfo2}>$150</Text>
                </View>
                <View style={styles.paymentinfoRow}>
                <Text style={styles.paymentinfo1}>Balance</Text>
                <Text style={styles.paymentinfo2}>$250</Text>
                </View>
   
              </View>
            </View>
  
  
              <Text style={styles.cardnumberheading}>Card Number</Text>
  
  
              <View style={styles.cardnumber}>
           
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
             <Text>4242 4242 42424 4242</Text>
             <Image source={require('../assets/card.png')}></Image> 
             </View> 
             </View>
  
             <View style={styles.expiry_cvc}>
             <Text style={styles.cardnumberheading}>Expiry Date</Text>
             <Text style={{...styles.cardnumberheading, marginRight:130}}>CVC</Text>
             </View>
  
             <View style={{flexDirection: 'row',justifyContent: 'space-between'}} >
             <Text style={{...styles.expiry_date_box, textAlign: 'left' }}>05/27</Text>
             <Text style={{...styles.expiry_date_box, textAlign: 'left'}}>456</Text>
             </View>
  
  
             <Text style={styles.cardnumberheading}>Card Holder Name</Text>
  
             <View style={styles.cardnumber}>
             
             <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
             <Text>RAKESH PRADHAN</Text>
  
            </View> 
            
           </View>
  
            <View style ={{bottom:130}}>
              <LinearGradient
                colors={['#77B859', '#2DA596']} // Define the colors for the gradient (ash to lighter ash)
                locations={[0, 1]} // Define the gradient color stops
                start={{ x: 0.2, y: 0 }} // Define the start position (top-left)
                end={{ x: 1, y: 1 }} // Define the end position (top-right)
                style={styles.button}
              >
                
                <TouchableOpacity onPress={() => navigation.navigate("PaymentSuccess")}>
                  <Text style={{...styles.buttonText}}>Pay 1500</Text>
                </TouchableOpacity>
              
              </LinearGradient>
            </View>
          </SafeAreaView>
  
          <StatusBar style="auto" />
        </LinearGradient>
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
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      maxHeight: 130,
      borderRadius: 20,
    },
    back_draft: {
      paddingHorizontal: 20,
      borderRadius: 10,
      width: '100%',
      marginTop: 20,
    },
    boxContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    box: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#57C590',
      backgroundColor: 'white',
      padding: 20,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      marginTop: -25
    },
  
    cardnumber: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#57C590',
      backgroundColor: 'white',
      padding: 20,
      width: '100%',
      borderRadius: 10,
      marginTop: 15,
      textAlign: 'center' //
    },
  
    cardnumberheading:{
      top: 10,
      left: 20,
    },
   
    row3_1: {
      color: 'black',
      fontSize: 12,
      fontWeight: 'bold',
      alignSelf: 'flex-start'
    },
    button: {
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 140
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
  
    },
    progressBar1: {
      height: 8,
      width: 110,
      borderRadius: 5,
      marginLeft: 5,
    },
    progressBar2: {
      height: 8,
      width: 110,
      borderRadius: 5,
      marginLeft: 8,
    },
    progressBar3: {
      height: 8,
      width: 110,
      borderRadius: 5,
      marginLeft: 11,
    },
    progressContainer: {
      flexDirection: 'row',
      paddingHorizontal: 22,
      marginTop: 40,
      justifyContent: 'flex-end',
    },
    progressText: {
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      backgroundColor: 'transparent',
      color: '#fff',
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
    boxRow: {
         flexDirection: 'row',
      
       },
       row1_2: {
        alignSelf: 'flex-end',
      },
  
      paymentinfoRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
  
      expiry_cvc:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      
      },
  
      paymentinfo1: {
       fontWeight: 'bold'
      },
  
      paymentinfo2: {
   color: '#C9C9C9',
   fontWeight: 'bold'
      },
  
  
  
      expiry_date_box:{
        top:10,
     
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#57C590',
        backgroundColor: 'white',
        padding: 20,
        width: 150,
        borderRadius: 10,
        marginTop: 15,
        textAlign: 'center' //
      }
  
  });
  
export default PaymentScreen;