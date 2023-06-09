import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../config/colors';
import TopUserControlBg from '../components/TopUserControlBg';

function AllApplicationScreen(props) {
    const dataallapplications = [
      { key: "1", value: "Paid" }, 
      { key: "2", value: "Completed" },
      { key: "3", value: "Rejected" },
      { key: "4", value: "Pending" },
      { key: "5", value: "Draft" },
     
    ]; 
    return (
        <SafeAreaView style={styles.container}>
            <TopUserControlBg>
                <Text style={styles.statusText}>Completed</Text>
            </TopUserControlBg>

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
        color: colors.white,
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
    },
    statusText:{
        fontWeight:700,
        fontSize:25,
        color: colors.white,
    }

});
export default AllApplicationScreen;