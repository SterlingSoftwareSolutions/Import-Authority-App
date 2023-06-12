import React from 'react';
import colors from '../config/colors';
import { StyleSheet, SafeAreaView, TextInput, View, TouchableOpacity, Text, Image, Switch, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function ProgressView(props) {
    return (
        <View style={{ ...styles.dashboardalapplications, flexDirection: 'row' }}>

            <View style={{ width: 60, height: 60 }}>
                <LinearGradient style={{ borderRadius: 20 }}
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>12</Text>

                </LinearGradient>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Total Applications</Text>
            </View>
            <View style={{ width: 60, height: 60 }}>
                <LinearGradient style={{ borderRadius: 20 }}
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>09</Text>
                </LinearGradient>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Complete Applications</Text>
            </View>
            <View style={{ width: 60, height: 60 }}>
                <LinearGradient style={{ borderRadius: 20 }}
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>05</Text>
                </LinearGradient>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Pending Applications</Text>
            </View>
            <View style={{ width: 60, height: 60 }}>
                <LinearGradient style={{ borderRadius: 20 }}
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>02</Text>
                </LinearGradient>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Reject Applications</Text>
            </View>
            <View style={{ width: 60, height: 60 }}>
                <LinearGradient style={{ borderRadius: 20 }}
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold' }}>07</Text>
                </LinearGradient>
                <Text style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: 8, top: 10 }}>Draft Applications</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboardalapplications: {
        backgroundColor: '#00232A',
        paddingTop: 20,
        justifyContent: 'space-around',
        width: 380,
        height: 90,
        borderRadius: 10,
        alignItems: 'center',
        bottom: 20,
        alignSelf: "center"
    },
})

export default ProgressView;