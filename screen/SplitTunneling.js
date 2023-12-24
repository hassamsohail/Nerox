import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  Switch,
  Pressable,
} from 'react-native';

export default function SplitTunneling({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };
  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
  };
  const toggleSwitch4 = () => {
    setIsEnabled4(previousState => !previousState);
  };
  const toggleSwitch5 = () => {
    setIsEnabled5(previousState => !previousState);
  };
  const toggleSwitch6 = () => {
    setIsEnabled6(previousState => !previousState);
  };
  const toggleSwitch7 = () => {
    setIsEnabled7(previousState => !previousState);
  };
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#00091F',
      }}>
      <View
        style={{
          flexGrow: 1,
          // height: Dimensions.get('window').height,

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
              Split Tunneling
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

          <Image
            source={require('../assets/Split.png')}
            style={{
              width: 64,
              alignSelf: 'center',
              height: 64,
              // opacity:0.5
            }}
          />
          <View style={{height: 10}} />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '200',
              color: '#fff',
              textAlign: 'center',
              paddingHorizontal: '15%',
            }}>
            All apps run through encrypted VPN connection. If you want to
            exclude any app, tap the button on right.
          </Text>

          <View style={{height: 25}} />

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Chromee.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Chrome
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Instagramm.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Instagram
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled1 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Facebookk.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Facebook
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled2 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Twitterr.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Twitter
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled3 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Youtubee.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Youtube
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled4 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch4}
                  value={isEnabled4}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/PlayStoree.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    PlayStore
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled5 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch5}
                  value={isEnabled5}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
            <View>
              <View style={{height: 15}} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/Telegramm.png')}
                    style={{
                      width: 48,
                      // alignSelf: 'center',
                      height: 48,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '200',
                      color: '#fff',
                      marginLeft: 10,
                    }}>
                    Telegram
                  </Text>
                </View>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled6 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch6}
                  value={isEnabled6}
                />
              </View>
              <View style={{height: 15}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
            </View>
          </View>
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
