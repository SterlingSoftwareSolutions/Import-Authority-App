import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { MaterialCommunityIcons } from "@expo/vector-icons";



export default function Dashboard() {
    const progress1 = 1; // Set the progress value between 0 and 1
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

            <LinearGradient style={{ paddingHorizontal: 20, paddingTop: 35, paddingBottom: 35, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
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

                </View >


                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            source={require('../assets/Group1.png')}
                            style={[{ width: 60, height: 60 }]}
                        />
                    </View>
                    <View style={{ left: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF', marginTop: 12 }}>Hi Hasindu</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FFF' }}>Welocme to Importh Authority</Text>
                    </View>
                </View>



            </LinearGradient>

            <View style={{ ...styles.dashboardalapplications, flexDirection: 'row' }}>

                <View style={{ width: 60, height: 60 }}>
                    <LinearGradient style={{ borderRadius: 20 }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>12</Text>

                    </LinearGradient>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Total Applications</Text>
                </View>
                <View style={{ width: 60, height: 60 }}>
                    <LinearGradient style={{ borderRadius: 20 }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>09</Text>
                    </LinearGradient>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Complete Applications</Text>
                </View>
                <View style={{ width: 60, height: 60 }}>
                    <LinearGradient style={{ borderRadius: 20 }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>05</Text>
                    </LinearGradient>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Pending Applications</Text>
                </View>
                <View style={{ width: 60, height: 60 }}>
                    <LinearGradient style={{ borderRadius: 20 }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>02</Text>
                    </LinearGradient>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Reject Applications</Text>
                </View>
                <View style={{ width: 60, height: 60 }}>
                    <LinearGradient style={{ borderRadius: 20 }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>07</Text>
                    </LinearGradient>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Draft Applications</Text>
                </View>

            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                    <LinearGradient style={{ width: 60, height: 60, marginLeft: 10, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                        colors={[greenColor, blueColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}>
                        <MaterialCommunityIcons name="plus" color={"#FFF"} size={45} />

                    </LinearGradient>
                </View>
                <Image source={require('../assets/carpay.png')} style={[styles.dashboardicon, { width: 60, height: 60, borderRadius: 30, }]} />
                <Image source={require('../assets/carpay2.png')} style={[styles.dashboardicon, { width: 60, height: 60, borderRadius: 30, }]} />
                <Image source={require('../assets/carpay3.png')} style={[styles.dashboardicon, { width: 60, height: 60, borderRadius: 30, }]} />
                <Image source={require('../assets/carpay4.png')} style={[styles.dashboardicon, { width: 60, height: 60, borderRadius: 30, }]} />

            </View>


            {/* BOX */}
            <View style={{ backgroundColor: '#DBEDD7', borderRadius: 10, width: '96%', height: '100%', marginLeft: 9, marginTop: 5 }}>

                {/* BOX 1*/}
                <View style={{
                    ...styles.dashboardapplication, borderLeftWidth: 10,
                    borderStartColor: '#57C590'
                }}>

                    <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={styles.dashboardalapplicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>
                {/* BOX 1*/}
                <View style={{
                    ...styles.dashboardapplication, borderLeftWidth: 10,
                    borderStartColor: '#F7D060'
                }}>

                    <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor: '#F7D060', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={styles.dashboardalapplicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

                {/* BOX 1*/}
                <View style={{
                    ...styles.dashboardapplication, borderLeftWidth: 10,
                    borderStartColor: '#FF6D60'
                }}>

                    <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor: '#FF6D60', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={styles.dashboardalapplicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

                {/* BOX 1*/}
                <View style={{
                    ...styles.dashboardapplication, borderLeftWidth: 10,
                    borderStartColor: '#57C590'
                }}>

                    <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={styles.dashboardalapplicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

                {/* BOX 1*/}
                <View style={{
                    ...styles.dashboardapplication, borderLeftWidth: 10,
                    borderStartColor: '#57C590'
                }}>

                    <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                        <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor: '#57C590', borderRadius: 10, borderWidth: 1 }]} />


                        <View style={{ paddingLeft: 10 }}>
                            <Text>Toyoya Supra</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <View>
                                    <Image source={require('../assets/chassis.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 4, right: 10 }]} />
                                    <Image source={require('../assets/built.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 6, right: 10 }]} />
                                    <Image source={require('../assets/odo.png')} style={[styles.dashboardicon, { width: 16, height: 16, tintColor: '#000', top: 9, right: 10 }]} />

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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={[styles.dashboardalapplicationbuttons, { marginBottom: 7 }]}
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
                            style={styles.dashboardalapplicationbuttons}
                        >
                            <TouchableOpacity>
                                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 12 }}>Download</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>


                </View>

            </View>

            <ScrollView contentContainerStyle={styles.transactionBoxContainer}>

            </ScrollView>







        </SafeAreaView>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF',
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
    dashboardboxicon: {
        marginLeft: 10,

    },
    transaction: {
        marginLeft: 15,

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
        borderStartColor: 'green',
        borderEndColor: 'blue'
    },

    dashboardalapplications: {
        backgroundColor: '#00232A',
        paddingTop: 20,
        justifyContent: 'space-around',
        width: 380,
        height: 90,
        borderRadius: 10,
        alignItems: 'center',
        left: 7,
        bottom: 20

    },

    dashboardalapplicationbuttons: {
        borderRadius: 4,
        width: 75,
        height: 20

    },

    dashboardapplication: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        width: '96%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between',
        marginBottom: 10,
        top: 20,
        left: 8

    },
    dashboardicon: {
        marginLeft: 10,

    },


});