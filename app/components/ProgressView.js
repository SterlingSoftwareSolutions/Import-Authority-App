import React, { useState, useEffect } from 'react'; import colors from '../config/colors';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import client from '../api/client';

function ProgressView(props) {
    const [applicationCounts, setApplicationCounts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await client();
                const response = await api.get("/applications");
             
                setApplicationCounts(response.data.data.count);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const renderApplication = (count, text) => (
        <View style={styles.singleApplication}>
            <LinearGradient
                style={{ borderRadius: 20 }}
                colors={[colors.secondary, colors.primary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={styles.countNumber}>{count}</Text>
            </LinearGradient>
            <Text style={styles.countText}>{text}</Text>
        </View>
    );

    if (applicationCounts === null) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.dashboardalapplications}>
            {renderApplication(applicationCounts.total, 'Total Applications')}
            {renderApplication(applicationCounts.completed, 'Complete Applications')}
            {renderApplication(applicationCounts.pending, 'Pending Applications')}
            {renderApplication(applicationCounts.rejected, 'Reject Applications')}
            {renderApplication(applicationCounts.draft, 'Draft Applications')}
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
        alignSelf: 'center',
        flexDirection: 'row',
    },
    singleApplication: {
        width: 60,
        height: 60,
    },
    countNumber: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
    },
    countText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 8,
        top: 10,
    },
});

export default ProgressView;
