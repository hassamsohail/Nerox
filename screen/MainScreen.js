import React, {useRef} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Pressable,
  Animated,
} from 'react-native';

export default function MainScreen({navigation}) {
  const [showMenu, setshowMenu] = React.useState(false);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00091F',
        borderRadius: 20,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#00091F',
          borderRadius: 20,
        }}>
        <ImageBackground
          style={{
            flex: 1,
          }}
          source={require('../assets/Splash.png')}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
            }}>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 0.7,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  Animated.timing(offsetValue, {
                    toValue: showMenu ? 0 : 290,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();

                  setshowMenu(!showMenu);
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    // marginTop:10,
                    color: '#fff',
                    marginLeft: 10,
                  }}>
                  Andrew Hale
                </Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  // marginTop:10,
                  color: '#fff',
                  marginLeft: 10,
                }}>
                Flex Score 638
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 50,
              marginLeft: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                // marginTop: 50,
                // marginLeft:20,
                // justifyContent:"center"
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 39,
                  width: 39,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#fff',
                }}>
                My Account
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                // marginLeft:20,
                // justifyContent:"center"
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 39,
                  width: 39,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#fff',
                }}>
                Master my Money
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                // marginLeft:20,
                // justifyContent:"center"
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 39,
                  width: 39,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#fff',
                }}>
                Scenario Simulator
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                // marginLeft:20,
                // justifyContent:"center"
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 39,
                  width: 39,
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}></View>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#fff',
                }}>
                The CrediFlex Vision
              </Text>
            </View>
          </View>

          <View
            style={{
              height: '35%',
            }}
          />
          <View
            style={{
              marginLeft: 32,

              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
              }}
              onPress={() => {
                navigation.navigate('Login2');
              }}>
              <Text
                style={{
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#fff',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Animated.View
          style={{
            flexGrow: 1,
            backgroundColor: '#00091F',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            borderRadius: showMenu ? 15 : 0,
            transform: [
              {
                scale: scaleValue,
              },
              {translateX: offsetValue},
            ],
          }}>
          <ImageBackground
            style={{
              flex: 1,
              borderRadius: 20,
            }}
            source={require('../assets/HomeBg.png')}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              <View style={{height: 20}} />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  height: 40,
                }}>
                <Pressable
                  onPress={() => {
                    Animated.timing(scaleValue, {
                      toValue: showMenu ? 1 : 0.7,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();

                    Animated.timing(offsetValue, {
                      toValue: showMenu ? 0 : 290,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();

                    setshowMenu(!showMenu);
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
                      source={require('../assets/Menu.png')}
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
                    fontWeight: '700',
                    color: '#fff',
                  }}>
                  NEROX
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
                      backgroundColor: '#668805',
                    }}>
                    <Image
                      source={require('../assets/Subscription.png')}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                </Pressable>
              </View>
              <View style={{height: 20}} />
              {/* Map Image */}
              <Image
                source={require('../assets/map.png')}
                style={{
                  width: '100%',
                  height: 200,
                }}
              />
              {/* Smart Location component */}

              <View
                style={{
                  width: '100%',
                  height: 88,
                  backgroundColor: 'rgba(46, 46, 61, 0.5)',
                  borderWidth: 1,
                  borderColor: '#202023',
                  marginTop: -25,
                  borderRadius: 20,
                  padding: 12,
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
                        height: 64,
                        width: 64,
                        borderRadius: 12,
                        backgroundColor: '#00091F',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={require('../assets/Defaultflag.png')}
                        style={{
                          width: 48,
                          height: 30,
                        }}
                      />
                    </View>
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
                        Smart Location
                      </Text>

                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '100',
                          color: '#A1A1AC',
                          marginTop: 4,
                        }}>
                        Fastest Server
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('../assets/Right.png')}
                    style={{
                      width: 24,
                      height: 24,
                    }}
                  />
                </View>
              </View>
              <View style={{height: 60}} />

              {/* Disconnected button */}
              <Image
                source={require('../assets/Disconnected.png')}
                style={{
                  width: 260,
                  alignSelf: 'center',
                  height: 260,
                }}
              />
              {/* Status Disconnected (Tap to Connect) */}
              <Image
                source={require('../assets/Tap_to_Connect.png')}
                style={{
                  width: 136,
                  alignSelf: 'center',
                  height: 20,
                }}
              />
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    </View>
  );
}
