import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import TopUserControlBg from "../components/TopUserControlBg";
import colors from "../config/colors";
import client from "../api/client";
import { CDN_URL } from '@env'

function ViewApplicationScreen(props) {
  const route = useRoute();
  const applicationId = route.params?.applicationId;
  const [application, setApplication] = useState(null);
  const [assets, setAssets] = useState({});

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const api = await client();
        const response = await api.get(`/applications/${applicationId}`);
        if (response.data.success) {
          setApplication(response.data.data.application);
          response.data.data.assets.forEach((element) => {
            setAssets((assets) => ({
              ...assets,
              [element.asset_type]: element.location,
            }));
          });
          // hide progress spinner
        } else {
          alert('Failed to fetch application');
        }
      } catch (error) {
        console.error('Error fetching application:', error);
      }
    };

    if (applicationId) {
      fetchApplication();
    }
  }, [applicationId]);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const buildMonth = application?.build_month ?? null;
  const monthName = buildMonth ? months[buildMonth - 1] : null;

  return (
    <View style={styles.container}>
      <TopUserControlBg>
        <View style={styles.viewstatus}>
          <Text style={{ ...styles.viewstatuslabel }}>{application?.status ? application.status.toUpperCase() : null}</Text>
        </View>
        <View>
          <Text style={{ color: '#E3E2E2', textAlign: 'center',marginTop: 10  }}> Your Application is in {application?.status.toUpperCase() ?? null} Stage </Text>
          <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold', marginTop: 5 }}>Approval Type: {application?.approval_type ?? null}  </Text>
        </View>

      </TopUserControlBg>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View key={application?.id ?? null} style={{ width: '90%', marginHorizontal: '5%', marginTop: 20 }}>
          <Text style={{ color: '#079BB7', fontWeight: 'bold' }}>Vehicle Info</Text>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Chassis/Frame Number:</Text>
              <Text style={styles.valueText}>{application?.chassis_no ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Est. date of arrival:</Text>
              <Text style={styles.valueText}>{application?.arrival_date ? new Date(application.arrival_date).toLocaleDateString() : null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Make:</Text>
              <Text style={styles.valueText}>{application?.make ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Model:</Text>
              <Text style={styles.valueText}>{application?.model ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Build Date:</Text>
              <Text style={styles.valueText}>{monthName}</Text>
              <Text style={styles.valueText}>{application?.build_year ?? null}</Text>
            </View>

            <View style={{ width: '45%' }}>
              <Text>Fuel Type:</Text>
              <Text style={styles.valueText}>{application?.fuel_type ?? null}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Transmission:</Text>
              <Text style={styles.valueText}>{application?.transmission ?? null}</Text>
            </View>
            <View style={{ width: '45%' }}>
              <Text>Body Type:</Text>
              <Text style={styles.valueText}>{application?.body_type ?? null}</Text>
            </View>


          </View>

          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
            <View style={{ width: '45%' }}>
              <Text>Drive Type:</Text>
              <Text style={styles.valueText}>{application?.drive_type ?? null}</Text>
            </View>
            <View style={{ width: '45%' }}>
              <Text>ODO Meter:</Text>
              <Text style={styles.valueText}>{application?.odo_meter ?? null}</Text>
            </View>
          </View>


          <Text
            style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
          >
            Exterior Images
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_right ?? 'default.png' }}
                style={styles.imagePreview}
              />
              <Text style={styles.frText}>FR Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_right ?? 'default.png' }}
                style={styles.imagePreview}
              />
              <Text style={styles.frText}>RR Corner</Text>
            </View>

            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_front_left ?? 'default.png' }}
                style={styles.imagePreview}
              />
              <Text style={styles.frText}>FL Corner</Text>
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_rear_left ?? 'default.png' }}
                style={styles.imagePreview}
              />
              <Text style={styles.frText}>RL Corner</Text>
            </View>
          </View>

          <Text
            style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
          >
            Interior Images
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_1 ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_2 ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
            </View>

            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_3 ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
            </View>
            <View style={styles.cameraContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_interior_4 ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
            </View>
          </View>
          {application?.approval_type === 'Older Vehicles' && (
            <>
              <Text
                style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
              >
                Additional Images
              </Text>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
              >
                <View style={styles.documentContainer}>
                  <Image
                    source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_engine ?? 'default.png' }}
                    style={[styles.imagePreview]}
                  />
                  <Text style={styles.frText}>Engine</Text>
                </View>
                <View style={styles.documentContainer}>
                  <Image
                    source={{ uri: CDN_URL + "/assets/applications/" + assets?.img_chassis ?? 'default.png' }}
                    style={[styles.imagePreview]}
                  />
                  <Text style={styles.frText}>Chassis/Fram</Text>
                </View>
              </View>
            </>
          )}
          <Text
            style={{ color: colors.primary, fontWeight: "bold", marginTop: 20 }}
          >
            Documents
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View style={styles.documentContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_invoice ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
              <Text style={styles.frText}>Invoice</Text>
            </View>
            <View style={styles.documentContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_export_certificate ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
              <Text style={styles.frText}>Export Certificate</Text>
            </View>

            <View style={styles.documentContainer}>
              <Image
                source={{ uri: CDN_URL + "/assets/applications/" + assets?.doc_auction_report ?? 'default.png' }}
                style={[styles.imagePreview]}
              />
              <Text style={styles.frText}>Auction Report</Text>
            </View>
          </View>
        </View>
      </ScrollView >

    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#DCF3E8",
  },
  background: {
    borderRadius: 20,
    padding: 10,
  },
  viewstatuslabel: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: colors.darkGrey,
    width: "35%",
    justifyContent: "space-between",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  cameraContainer: {
    marginHorizontal: "auto",
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 80,
    height: 95,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  documentContainer: {
    marginHorizontal: 20,
    backgroundColor: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    width: 100,
    height: 95,
    alignItems: "center",
    borderColor: colors.lightGrey,
  },
  cameraIcon: {
    marginTop: 10,
    borderRadius: 10,
    width: 50,
    height: 50,
    tintColor: "#C9C9C9",
  },
  frText: {
    fontSize: 11,
  },
  valueText: {
    color: colors.darkGrey,
  },
  imagePreview: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginTop: 10,


  }
});
export default ViewApplicationScreen;
