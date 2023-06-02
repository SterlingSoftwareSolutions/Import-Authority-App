import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import colors from '../config/colors';


function AllApplicationScreen(props) {
    const progress1 = 1; // Set the progress value between 0 and 1
    const progress2 = 1;
    const progress3 = 0;




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
                colors={[colors.secondary, colors.primary]}
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
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF', marginTop: 12 }}>All Applications</Text>

                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' }}>
                    <Text style={{ backgroundColor: '#FFF', width: 90, height: 30, borderRadius: 4, fontSize: 12, fontWeight: 700, textAlignVertical: 'center' }}>Rejected</Text>
                    <Text style={{ backgroundColor: '#FFF', width: 90, height: 30, borderRadius: 4, fontSize: 12, fontWeight: 700, textAlignVertical: 'center' }}>Make</Text>
                    <Text style={{ backgroundColor: '#FFF', width: 90, height: 30, borderRadius: 4, fontSize: 12, fontWeight: 700, textAlignVertical: 'center' }}>Model</Text>
                    <TouchableOpacity onPress={() => handleTransactionPress()}>
                        <Image source={require('../assets/search.png')} style={[{ width: 32, height: 32, tintColor: '#fff' }]} />
                    </TouchableOpacity>

                </View>
            </LinearGradient>


            <ScrollView contentContainerStyle={{ ...styles.paymenthisorycontainer, marginTop: 20 }}>

                {/* BOX 1*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#57C590',
                }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

                {/* BOX 2*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#FF6D60',
                }}>




                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay2.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#FF6D60', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>


                {/* BOX 3*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#4B4B4B',
                }}>




                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay3.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#4B4B4B', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>


                {/* BOX 4*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#F7D060',
                }}>




                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay4.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#F7D060', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>


                {/* BOX 5*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#57C590',
                }}>




                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

                {/* BOX 6*/}
                <View style={{
                    ...styles.application1, borderLeftWidth: 10,
                    borderStartColor: '#57C590',
                }}>




                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/carpay5.png')} style={[styles.icon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.icon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

                                </View>


                                <View>
                                    <View>
                                        <Text>Chassis:</Text>
                                        <Text>Build Date:</Text>
                                        <Text>ODO:</Text>
                                    </View>
                                </View>


                                <View style={{ left: 10 }} >
                                    <Text>123456M</Text>
                                    <Text>2016/07</Text>
                                    <Text>20350</Text>
                                </View>
                            </View>



                        </View>
                    </View>


                    <View style={{}}>
                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>View</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={[styles.applicationbuttons, { marginBottom: 7 }]}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Edit</Text>
                            </TouchableOpacity>
                        </LinearGradient>

                        <LinearGradient
                            colors={['#77B859', '#2DA596']}
                            locations={[0, 1]}
                            start={{ x: 0.2, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.applicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


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

    application1: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        width: '96%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        marginBottom: 10,

    },

    paymenthistorybtn: {
        color: '#fff',
        backgroundColor: '#FF6D60',
        textAlign: 'center',
        borderRadius: 5,
        padding: 2,
        fontWeight: 900,
        width: 70
    },

    applicationbuttons: {
        borderRadius: 4,
        width: 75,
        height: 20

    }

});
export default AllApplicationScreen;