import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Touchable } from "react-native";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import { CDN_URL } from '@env'
import client from "../api/client";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SelectList } from "react-native-dropdown-select-list";


const TransactionHistoryLists = ({ data }) => {


    const navigation = useNavigation();


    const RenderItem = ({ item }) => {

        const timestamp = new Date(item.created_at);
        const timestamp_time = timestamp.toLocaleDateString() + ' ' + timestamp.toLocaleTimeString()


        return (
            <View>
                <Text style={{ left: 20, }}>{timestamp_time}</Text>
                <View style={styles.transactionBox}>
                    <Text style={{ fontWeight: 'bold' }}>{item.reference}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text> **** **** **** {item.card}</Text>
                        <Text style={{ color: 'green' }}>${item.amount}</Text>
                    </View>
                    <Text>{item.created_at}</Text>

                </View>
            </View>
        );

    };




    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <RenderItem item={item}></RenderItem>}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingVertical: 10 }}
        />
    );






};

const styles = StyleSheet.create({
    transactionBox: {

        borderRadius: 10,
        backgroundColor: "#F1FAF6",
        padding: 20,
        width: "96%",
        marginBottom: 15,
        borderLeftWidth: 10,
        borderStartColor: colors.completed,
        left: 6,
        marginTop: 10

    },
});

export default TransactionHistoryLists;