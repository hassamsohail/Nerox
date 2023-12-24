import React, {useState} from 'react';
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

export default function Setting({navigation}) {
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
  };const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
  };const toggleSwitch4 = () => {
    setIsEnabled4(previousState => !previousState);
  };const toggleSwitch5 = () => {
    setIsEnabled5(previousState => !previousState);
  };const toggleSwitch6 = () => {
    setIsEnabled6(previousState => !previousState);
  };const toggleSwitch7 = () => {
    setIsEnabled7(previousState => !previousState);
  };
  return (
    <ScrollView>
      <View
        style={{
          flexGrow: 1,
          backgroundColor: '#00091F',
        }}>
        <View
          style={{
            width: '100%',
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
              Setting
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
              backgroundColor: '#171B2E',
              paddingTop: 24,
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                  Connection mode
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
                  IPSec
                </Text>
              </View>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                  Anonymous statistics
                </Text>

                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />

              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
              Connect when app starts
                </Text>
                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled1 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                 Show notification
                </Text>
                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled2 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                    <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}
                    >

                
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                Switch block
                </Text>

                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft:10
                  }}
                />
                </View>
                <Switch
                  trackColor={{false: '#434350', true: '#434350'}}
                  thumbColor={isEnabled3 ? '#6B8F04' : '#585864'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                  disabled  
                />
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
               Block internet when conecting
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
              or changing servers
                </Text>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                    <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}
                    >

                
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
            Split Tunneling 
                </Text>

                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft:10
                  }}
                />
                </View>
                <Switch
                  trackColor={{false: '#4A4A61', true: '#434350'}}
                  thumbColor={isEnabled4 ? '#6B8F04' : '#ABABB1'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch4}
                  value={isEnabled4}
                />
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
             Allows certain apps or IPs to be excluded 
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
       from the vpn traffic.
                </Text>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                    <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}
                    >

                
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
           NetShield
                </Text>

                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft:10
                  }}
                />
                </View>
                <Switch
                  trackColor={{false: '#434350', true: '#434350'}}
                  thumbColor={isEnabled5 ? '#6B8F04' : '#585864'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch5}
                  value={isEnabled5}
                  disabled  
                />
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
            Block advertisements, trackers
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
   and malware.
                </Text>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                    <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}
                    >

                
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
           Kill Switch
                </Text>

                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft:10
                  }}
                />
                </View>
                <Switch
                  trackColor={{false: '#434350', true: '#434350'}}
                  thumbColor={isEnabled6 ? '#6B8F04' : '#585864'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch6}
                  value={isEnabled6}
                  disabled  
                />
              </View>
              <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
           Set uo how VPN behaves if
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '200',
                    color: '#A1A1AC',
                  }}>
    your connection is disrupted.
                </Text>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                    <View
                    style={{
                        flexDirection:"row",
                        justifyContent:"center",alignItems:"center"
                    }}
                    >

                
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
      Imrpove connection stability
                </Text>

                <Image
                  source={require('../assets/C1.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft:10
                  }}
                />
                </View>
                <Switch
                  trackColor={{false: '#434350', true: '#434350'}}
                  thumbColor={isEnabled7 ? '#6B8F04' : '#585864'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch7}
                  value={isEnabled7}
                  disabled  
                />
              </View>
             
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <Pressable
              onPress={()=>{

                navigation.navigate("Term")
              }}
              
              >

             
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                Term of Service
                </Text>
                <Image
                  source={require('../assets/Right.png')}
                  style={{
                    width: 24,
                    height: 24,
                    opacity:0.5

                  }}
                />
              </View>
              </Pressable>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />

              <View style={{height: 24}} />
              <Pressable
              onPress={()=>{

                navigation.navigate("PrivacyPolicy")
              }}
              
              >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
              Privacy Policy
                </Text>
                <Image
                  source={require('../assets/Right.png')}
                  style={{
                    width: 24,
                    opacity:0.5
                    ,
                    height: 24,
                  }}
                />
              </View>
              </Pressable>
              <View style={{height: 24}} />
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#3A3A4D',
                }}
              />
              <View style={{height: 24}} />
              <Pressable
              onPress={()=>{

                navigation.navigate("About")
              }}
              
              >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '200',
                    color: '#fff',
                  }}>
                About
                </Text>
                <Image
                  source={require('../assets/Right.png')}
                  style={{
                    width: 24,
                    height: 24,
                    opacity:0.5

                  }}
                />
              </View>
              </Pressable>
              <View style={{height: 24}} />
             
             
            </View>
            
          </View>
          <View style={{height: 54}} />

        </View>
      </View>
    </ScrollView>
  );
}
