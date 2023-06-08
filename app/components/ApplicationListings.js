import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import applicationsApi from '../api/applications';
import { useState } from 'react';

function ApplicationListings(props) {
    const [listings, setListings] = useState([]);
    return (
        <View style={{
            ...styles.dashboardapplication, borderLeftWidth: 10,
            borderStartColor: '#57C590'
        }}>

            <View style={{ flexDirection: 'row', marginLeft: -13 }}>
                <Image source={require('../assets/carpay.png')} style={[styles.dashboardboxicon, { width: 80, height: 80, borderColor:colors.completed, borderRadius: 10, borderWidth: 1 }]} />


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
        top: 30,
        left: 8
    },
    dashboardicon: {
        marginLeft: 10,
    },
});


export default ApplicationListings;
