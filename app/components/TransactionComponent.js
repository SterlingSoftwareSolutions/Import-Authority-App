import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

function TransactionComponent({ styles }) {
    const navigation = useNavigation();

    return (
        <View style={styles.paymenthistorybox}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={require('../assets/carpay.png')}
                    style={[styles.icon, { width: 80, height: 80, borderColor: 'red', borderRadius: 10, borderWidth: 1 }]}
                />
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
            <TouchableOpacity onPress={() => navigation.navigate("CardPayment")}>
                <Text style={{ ...styles.paymenthistorybtn }}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    );
}

export default TransactionComponent;
