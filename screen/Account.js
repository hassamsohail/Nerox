import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  Switch,
  ImageBackground,
  Pressable,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default function Account({navigation}) {
  const [deviceName, setDeviceName] = useState('');

  useEffect(() => {
    async function fetchDeviceName() {
      const name = await DeviceInfo.getDeviceName();
      setDeviceName(name);
    }

    fetchDeviceName();
  }, []);
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
              Account
            </Text>
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
                }}></View>
            </Pressable>
          </View>
          <View style={{height: 20}} />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
            }}>
            <View style={{height: 20}} />

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // width: ,
              }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 120,
                  backgroundColor: 'rgba(79, 79, 86, 0.3)',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Prof.png')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>

              <View style={{height: 20}} />

              <Text
                style={{
                  fontSize: 20,
                  // marginLeft: 10,
                  color: '#fff',
                }}>
                Ujala Ak.
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 5,
                  color: '#A1A1AC',
                }}>
                Ujlalaak123@gmail.com
              </Text>
            </View>
          </View>
          <View style={{height: 20}} />

          <View
            style={{
              width: '90%',
              alignSelf: 'center',

              height: 305,
              backgroundColor: '#171B2E',
              borderRadius: 24,
              padding: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 72,
                width: '100%',
              }}>
              <View>
                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 24,
                    height: 24,
                    // marginLeft:10
                  }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#fff',
                  }}>
                  Premium
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
                  $9.99 / month
                </Text>
              </View>
              <View
                style={{
                  height: 72,
                  width: 77,
                  backgroundColor: '#2E2E3D',
                  borderRadius: 16,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '400',
                    color: '#FFF',
                  }}>
                  20
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
                  Days Left
                </Text>
              </View>
            </View>
            <View style={{height: 20}} />

            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: '#3A3A4D',
              }}
            />
            <View style={{height: 20}} />
            <View
              style={{
                flexDirection: 'row',
                // justifyContent:"center",
                // alignItems: 'center',
                height: 68,
                width: '100%',
              }}>
              <Image
                source={require('../assets/Id.png')}
                style={{
                  width: 22.32,
                  height: 20,
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
                  User ID
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                  12837827438
                </Text>
              </View>
            </View>
            <View style={{height: 10}} />
            <View
              style={{
                flexDirection: 'row',
                // justifyContent:"center",
                // alignItems: 'center',
                height: 68,
                width: '100%',
              }}>
              <Image
                source={require('../assets/Cr.png')}
                style={{
                  width: 22.46,
                  height: 20,
                }}
              />
              <View
                style={{
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
               Device (1/2)
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
            {deviceName}
                </Text>
              </View>
            </View>
            
          </View>
          <View style={{height: 20}} />
 
          <Pressable
            style={{
              width: 327,
              alignSelf:"center"
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <ImageBackground
              source={require('../assets/LGButton.png')}
              style={{
                width: '100%',
                height: 56,

                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
          
            </ImageBackground>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
