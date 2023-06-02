import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { color } from 'react-native-elements/dist/helpers';
import colors from '../config/colors';

function ViewApplicationScreen(props) {

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

                <View style={styles.viewstatus}>
                    <Text style={{ ...styles.viewstatuslabel }}>Submitted</Text>
                </View>



                <View style={{ ...styles.data_and_searchicon }}>

                    <Text style={{ color: '#E3E2E2', textAlign: 'center' }}> Your Application in Submitted Page </Text>
                    <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>Approval Type: SEV </Text>
                </View>


                <StatusBar style="auto" />
            </LinearGradient>



            <View style={{ width: '90%', marginHorizontal: '5%', marginTop: 20 }}>

                <Text style={{ color: '#079BB7', fontWeight: 'bold' }}>Vehicle Info</Text>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Chassis/Frame Number</Text>
                        <Text>12345GMh&*45</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>Est. date of arrival:</Text>
                        <Text>2016/11/01</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Make:</Text>
                        <Text>Toyota</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>Model:</Text>
                        <Text>Prius</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Build Date:</Text>
                        <Text>July 2016</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>Model:</Text>
                        <Text>Petrol</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Transmission:</Text>
                        <Text>Petrol</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>Body Type:</Text>
                        <Text>Sedan</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Transmission:</Text>
                        <Text>Petrol</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>Body Type:</Text>
                        <Text>Sedan</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                    <View style={{ width: '45%' }}>
                        <Text>Drive Type:</Text>
                        <Text>FWD</Text>
                    </View>

                    <View style={{ width: '45%' }}>
                        <Text>ODO Meter:</Text>
                        <Text>20350</Text>
                    </View>
                </View>

                <Text style={{ color: '#079BB7', fontWeight: 'bold', marginTop: 20 }}>Vehicle Images</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>FR Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>RR Corner</Text>
                    </View>

                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>FL Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>RL Corner</Text>
                    </View>
                </View>


                <Text style={{ color: '#079BB7', fontWeight: 'bold', marginTop: 20 }}>Interior Images</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>FR Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>RR Corner</Text>
                    </View>


                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>FL Corner</Text>
                    </View>
                    <View style={styles.cameraContainer}>
                        <Image source={require('../assets/cam.png')} style={[styles.cameraIcon]} />
                        <Text style={styles.frText}>RL Corner</Text>
                    </View>
                </View>


            </View>


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
        borderRadius: 20,
        padding: 10
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

    viewstatuslabel: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#F7D060',
        width: '22%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 5

    },

    cameraContainer: {
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        paddingHorizontal: 4,
        paddingVertical: 2,
        marginTop: 25,
        borderRadius: 10,
        borderWidth: 1,
        width: 80,
        height: 90,
        alignItems: 'center',
        borderColor: 'grey'
    },


    cameraIcon: {
        marginTop: 10,
        borderRadius: 10,
        width: 50,
        height: 50,
        tintColor: '#C9C9C9',



    },

    frText: {
        fontSize: 12
    }







});
export default ViewApplicationScreen;