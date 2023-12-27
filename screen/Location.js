import React, {useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';

export default function Location({navigation}) {
  const data = [
    {
      label: 'Auto Select',
      ms: 'Fastest Server',
      image: require('../assets/Defaultflag.png'),
    },
    {
      label: 'United States',
      ms: '35 ms - Miami',
      image: require('../assets/US.png'),
    },
    {
      label: 'Singapore',
      ms: '44 ms - Singapore',
      image: require('../assets/Singapore.png'),
    },

    // Add more data items as needed
  ];
  const data1 = [
    {
      label: 'United States',
      ms: '11 Locations',
      image: require('../assets/US.png'),
    },
    {
      label: 'India',
      ms: '5 Locations',
      image: require('../assets/IN.png'),
    },
    {
      label: 'United Kingdom',
      ms: '11 Locations',
      image: require('../assets/GB.png'),
    },
    {
      label: 'Singapore',
      ms: '7 Locations',
      image: require('../assets/Singapore.png'),
    },
    {
      label: 'Canada',
      ms: '11 Locations',
      image: require('../assets/CA.png'),
    },
    {
      label: 'United States',
      ms: '11 Locations',
      image: require('../assets/US.png'),
    },
    
   
    // Add more data items as needed
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  const handlePress = index => {
    setSelectedItem(index);
  };
  
  return (
    <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      // alignItems: 'center',
      backgroundColor: '#00091F',
    }}>
   
      <View
        style={{
          // flexGrow: 1,
          //   height: Dimensions.get('window').height,

          // backgroundColor: '#00091F',
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
              Location
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
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Pressable
              onPress={() => {
                navigation.navigate('Protocol');
              }}>
              <View
                style={{
                  width: '100%',
                  height: 88,
                  backgroundColor: '#292930',
                  borderWidth: 1,
                  borderColor: '#202023',
                  marginTop: 20,
                  borderRadius: 20,
                  // padding: 12,
                  justifyContent: 'center',
                  // alignItems:"center"
                  paddingHorizontal: 15,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent:"space-between",
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: '#fff',
                        }}>
                        Protocol
                      </Text>

                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '100',
                          color: '#A1A1AC',
                          marginTop: 4,
                        }}>
                        IPsec - IKEv2
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/Ar.png')}
                    style={{
                      width: 19,
                      height: 15,
                      marginRight: 5,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            <View style={{height: 20}} />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#fff',
              }}>
              Smart Location
            </Text>
            <View style={{height: 10}} />

            {data.map((item, index) => (
              <Pressable key={index} onPress={() => handlePress(index)}>
                <View
                  key={index}
                  style={{
                    marginBottom: 10,
                    width: '100%',
                    height: 64,
                    backgroundColor:
                      selectedItem === index
                        ? 'rgba(107, 143, 4, 0.1)'
                        : '#171B2E',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 12,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: selectedItem === index ? '#6B8F04' : '#4A4A61',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 32,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#fff',
                          marginLeft: 5,
                        }}>
                        {item.label}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: 6,
                            width: 6,
                            borderRadius: 6,
                            backgroundColor: '#23B65D',
                          }}></View>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '200',
                            color: '#fff',
                            marginLeft: 5,
                          }}>
                          {item.ms}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 19,
                      height: 19,
                      borderRadius: 19,
                      backgroundColor:
                        selectedItem === index ? '#6B8F04' : '#171B2E',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor:
                        selectedItem === index ? '#6B8F04' : '#4A4A61',
                    }}>
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 8,
                        backgroundColor:
                          selectedItem === index ? '#EFDAA5' : '#171B2E',
                      }}></View>
                  </View>
                </View>
              </Pressable>
            ))}
            <View style={{height: 10}} />

            <Text
              style={{
                fontSize: 14,
                fontWeight: '400',
                color: '#fff',
              }}>
              All Server
            </Text>
            <View style={{height: 10}} />

            {data1.map((item, index) => (
              <Pressable key={index}>
                <View
                  key={index}
                  style={{
                    marginBottom: 10,
                    width: '100%',
                    height: 64,
                    backgroundColor: '#171B2E',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 12,
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#4A4A61',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: 50,
                        height: 32,
                      }}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#fff',
                          marginLeft: 5,
                        }}>
                        {item.label}
                      </Text>

                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '200',
                          color: '#fff',
                          marginLeft: 5,
                          marginTop: 3,
                        }}>
                        {item.ms}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 24,
                      backgroundColor: '#3A3A4D',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#3A3A4D',
                    }}>
                    <Image
                      source={require('../assets/Downa.png')}
                      style={{
                        width: 16,
                        height: 16,
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            ))}
            <View style={{height: 20}} />

          </View>
        </View>

      </View>
        <View
          style={{
            width: '100%',
            height: 93,
            backgroundColor: '#171B2E',
            justifyContent: 'center',
            alignItems: 'center',
            // position: 'absolute',
            // bottom: 0,
          }}>
          <Pressable
            style={{
              width: 327,
            }}
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            <ImageBackground
              source={require('../assets/btn.png')}
              style={{
                width: '100%',
                height: 68,

                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '500',
                  // textAlign: 'center',
                }}>
                Upgrade to Premium
              </Text>
            </ImageBackground>
          </Pressable>
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
