import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function Protocol({navigation}) {
  const data = [
    { label: 'Auto',  },
    { label: 'Open VPN',  },
    { label: 'IKEv2',  },
    { label: 'IPSec',  },
    // Add more data items as needed
  ];

  const [selectedItem, setSelectedItem] = useState(0);

  const handlePress = (index) => {
    setSelectedItem(index);
  };
  return (
    <ScrollView>
      <View
        style={{
          flexGrow: 1,
          height: Dimensions.get('window').height,

          backgroundColor: '#00091F',
        }}>
        <View
          style={{
            width: '100%',
            // height:"100%",
            alignSelf: 'center',
          }}>
          <View style={{height: 20}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90%',

              alignSelf: 'center',

              height: 40,
            }}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}>
              <View
                style={{
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 12,
                  backgroundColor: '#00091F',
                }}>
                <Image
                  source={require('../assets/Left.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            </Pressable>

            <Text
              style={{
                fontSize: 20,
                fontWeight: '300',
                color: '#fff',
              }}>
              Protocol
            </Text>
            <Image
              source={require('../assets/Re.png')}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </View>
          <View style={{height: 20}} />

          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#979797',
              textAlign: 'center',
              paddingHorizontal: '25%',
            }}>
            Select the appropriate location and protocol
          </Text>
          <View style={{height: 20}} />
          {data.map((item, index) => (
            <Pressable
            
            key={index}
            onPress={() => handlePress(index)}
            
            >

           
        <View
          key={index}
          style={{
            marginBottom:2,
            width: '100%',
            height: 63,
            backgroundColor: '#171B2E',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: '200',
              color: '#fff',
            }}
          >
            {item.label}
          </Text>

          <View
            style={{
              width: 19,
              height: 19,
              borderRadius: 19,
              backgroundColor: selectedItem === index ? '#6B8F04' : '#171B2E',
              justifyContent:"center", alignItems:"center"
            }}
          >
 <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 8,
              backgroundColor: selectedItem === index ? '#EFDAA5' : '#171B2E',
            }}
          ></View>


          </View>
        </View>
        </Pressable>
      ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    alignSelf: 'center',
    width: '90%',

    backgroundColor: '#171B2E',
    borderRadius: 8,
    paddingLeft: 16,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
  },
  tabBarContainer: {
    flexDirection: 'row',
    marginTop: 20,
    // backgroundColor: '#171B2E',
    height: 56,
    marginLeft: 20,
  },
  tab: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 11,
    borderWidth: 1,
    borderRadius: 12,
  },
  tabText: {
    color: '#FFFFFF',
  },
});
