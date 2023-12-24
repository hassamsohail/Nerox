import React, {useRef, useState, useEffect} from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Pressable,
  Animated,
  StyleSheet,
} from 'react-native';

export default function MainScreen({navigation}) {
  const [showMenu, setshowMenu] = React.useState(false);
  const [connected, setConnected] = useState(false); // Track connection status
  const [connectingTime, setConnectingTime] = useState(0);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    let interval;
    if (connected) {
      interval = setInterval(() => {
        setConnectingTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [connected]);

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleDisconnect = () => {
    openModal();
  };

  const confirmDisconnect = () => {
    setConnected(false);
    setConnectingTime(0);
    closeModal();

    navigation.navigate("ConnectionReport")
  };
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
        <View
          style={{
            flex: 1,
            backgroundColor: '#00091F',
          }}>
          <View
            style={{
              width: '87%',
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
                Menu
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
                justifyContent: 'center',
                alignItems: 'center',
                width: 120,
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
            </View>

            <View style={{height: 30}} />
            <Pressable
              onPress={() => {
                navigation.navigate('Account');
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
                  flexDirection: 'row',

                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Acc.png')}
                  style={{
                    height: 24,
                    width: 24,
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  My Account
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('SplitTunneling');
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
                  flexDirection: 'row',
                  marginTop: 30,
                  // marginLeft:20,
                  // justifyContent:"center"
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Spl.png')}
                  style={{
                    height: 24,
                    width: 24,
                    // borderRadius: 5,
                    // backgroundColor: '#fff',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  Split Tunneling
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Protocol');
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
                  flexDirection: 'row',
                  marginTop: 30,
                  // marginLeft:20,
                  // justifyContent:"center"
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Pro.png')}
                  style={{
                    height: 24,
                    width: 24,
                    // borderRadius: 5,
                    // backgroundColor: '#fff',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  Protocol
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Setting');
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
                  flexDirection: 'row',
                  marginTop: 30,
                  // marginLeft:20,
                  // justifyContent:"center"
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Set.png')}
                  style={{
                    height: 24,
                    width: 24,
                    // borderRadius: 5,
                    // backgroundColor: '#fff',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  Setting
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Faq');
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
                  flexDirection: 'row',
                  marginTop: 30,
                  // marginLeft:20,
                  // justifyContent:"center"
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Faq.png')}
                  style={{
                    height: 24,
                    width: 24,
                    // borderRadius: 5,
                    // backgroundColor: '#fff',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  FAQ
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Share');
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
                  flexDirection: 'row',
                  marginTop: 30,
                  // marginLeft:20,
                  // justifyContent:"center"
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/Sha.png')}
                  style={{
                    height: 24,
                    width: 24,
                    // borderRadius: 5,
                    // backgroundColor: '#fff',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 14,
                    marginLeft: 15,
                    color: '#fff',

                    fontWeight: '100',
                  }}>
                  Share
                </Text>
              </View>
            </Pressable>

            <View
              style={{
                height: 55,
              }}
            />

            <Pressable
              style={{
                width: 327,
              }}
              onPress={() => {
                navigation.navigate('Subscription');
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
                  Get Premium Account
                </Text>
                <Image
                  source={require('../assets/crown.png')}
                  style={{
                    height: 40,
                    width: 40,
                    // borderRadius: 5,
                    marginLeft: 20,
                  }}></Image>
              </ImageBackground>
            </Pressable>
          </View>
        </View>
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
                    navigation.navigate("Subscription");
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

              {!connected ? (
                <Image
                  source={require('../assets/map.png')}
                  style={{
                    width: '100%',
                    height: 200,
                  }}
                />
              ) : null}

              {connected ? (
                <View>
                  <View style={{height: 20}} />
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '100',
                      color: '#A1A1AC',
                      alignSelf: 'center',
                      marginTop: 4,
                    }}>
                    Connecting Time
                  </Text>
                  <Text
                    style={{
                      fontSize: 32,
                      fontWeight: '400',
                      color: '#fff',
                      alignSelf: 'center',
                      marginTop: 4,
                    }}>
                    {formatTime(connectingTime)}
                  </Text>
                </View>
              ) : null}

              {/* Smart Location component */}
              {!connected ? (
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
              ) : (
                <View
                  style={{
                    width: '100%',
                    height: 88,
                    backgroundColor: 'rgba(46, 46, 61, 0.5)',
                    borderWidth: 1,
                    borderColor: '#202023',
                    marginTop: 20,
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
                          source={require('../assets/US.png')}
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
                          United States
                        </Text>

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 4,
                          }}>
                          IP 37.120.202.186
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
              )}
              {connected ? (
                <View>
                  <View style={{height: 20}} />

                  <View
                    style={{
                      width: '80%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        // width:"80%",
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/Download.png')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 5,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '300',
                            color: '#A1A1AC',
                            // alignSelf: 'center',
                            // marginTop: 4,
                          }}>
                          Download
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#fff',
                            // alignSelf: 'center',
                            // marginTop: 4,
                          }}>
                          245 KB/s
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: 1,
                        height: 34,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#202023',
                      }}></View>
                    <View
                      style={{
                        // width:"80%",
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/Upload.png')}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                      <View
                        style={{
                          marginLeft: 5,
                          justifyContent: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '300',
                            color: '#A1A1AC',
                            // alignSelf: 'center',
                            // marginTop: 4,
                          }}>
                          Upload
                        </Text>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            color: '#fff',
                            // alignSelf: 'center',
                            // marginTop: 4,
                          }}>
                          176 KB/s
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ) : null}
              <View style={{height: 60}} />

              {/* Disconnected button */}
              {!connected ? (
                <View>
                  <Pressable
                    onPress={() => {
                      // Logic to handle connecting
                      setConnected(true);
                    }}>
                    <Image
                      source={require('../assets/Disconnected.png')}
                      style={{
                        width: 260,
                        alignSelf: 'center',

                        height: 260,
                      }}
                    />
                  </Pressable>
                </View>
              ) : (
                <View>
                  <View style={{height: 12}} />

                  <Pressable onPress={handleDisconnect}>
                    <Image
                      source={require('../assets/Connected.png')}
                      style={{
                        width: 260,

                        alignSelf: 'center',
                        height: 260,
                      }}
                    />
                  </Pressable>
                  <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={closeModal}>
                    <View style={styles.overlay}>
                      <View style={styles.modal}>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                          Disconnect
                        </Text>
                        <View style={{height: 20}} />

                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '200',
                            color: '#A1A1AC',
                          }}>
                          Are you sure to disconnect?
                        </Text>
                        <View style={{height: 20}} />

                        <Pressable
                          style={{
                            width: 279,
                            alignSelf: 'center',
                          }}
                          onPress={confirmDisconnect}>
                          <ImageBackground
                            source={require('../assets/Dis.png')}
                            style={{
                              width: '100%',
                              height: 56,

                              justifyContent: 'center',
                              alignItems: 'center',
                              alignSelf: 'center',
                            }}></ImageBackground>
                        </Pressable>
                        <View style={{height: 30}} />
                        <Pressable onPress={closeModal}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: '#fff',
                            }}>
                            Cancel
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                </View>
              )}

              {/* Status Disconnected (Tap to Connect) */}
              {!connected ? (
                <Image
                  source={require('../assets/Tap_to_Connect.png')}
                  style={{
                    width: 136,
                    alignSelf: 'center',
                    height: 20,
                  }}
                />
              ) : (
                <Image
                  source={require('../assets/Connected_Status.png')}
                  style={{
                    width: 105,
                    alignSelf: 'center',
                    height: 20,
                  }}
                />
              )}
            </View>
          </ImageBackground>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#00091F',
    padding: 20,
    width: 327,
    height: 281,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
