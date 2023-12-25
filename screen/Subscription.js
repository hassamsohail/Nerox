import React, {useState} from 'react';
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

export default function Subscription({navigation}) {
  const [selectedBox, setSelectedBox] = useState(1);
  const boxes = [
    {
      months: 6,
      devices: 2,
      price: 9.99,
    },
    {
      months: 1,
      devices: 1,
      price: 2.99,
    },
    {
      months: 12,
      devices: 4,
      price: 99.99,
    },
  ];
  const handleBoxPress = boxIndex => {
    setSelectedBox(boxIndex);
  };

  const renderBox = boxIndex => {
    const isSelected = selectedBox === boxIndex;
    const box = boxes[boxIndex];

    return (
      <Pressable
        key={boxIndex}
        onPress={() => handleBoxPress(boxIndex)}
        style={{
          width: isSelected ? 119 : 94,
          height: isSelected ? 152 : 135,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: isSelected ? '#6B8F04' : '#4D4D4D',
          borderRadius: 15,
        }}>
        <Text
          style={{
            fontSize: isSelected ? 14 : 12,
            fontWeight: '400',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          {box.months} MONTH
        </Text>
        <View style={{height: 5}} />

        <Text
          style={{
            fontSize: isSelected ? 10 : 8,
            fontWeight: '200',
            color: '#DADADA',
            textAlign: 'center',
          }}>
          Link up to {box.devices} Device
        </Text>
        <View style={{height: 14}} />

        <Text
          style={{
            fontSize: isSelected ? 24 : 16,
            fontWeight: '400',
            color: isSelected ? '#6B8F04' : '#fff',
            textAlign: 'center',
          }}>
          ${box.price.toFixed(2)}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: '200',
            color: '#DADADA',
            textAlign: 'center',
          }}>
          / month
        </Text>
      </Pressable>
    );
  };
  return (
    <ScrollView
    style={{
      flex:1
      ,  backgroundColor: '#00091F',
    }}
    >
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
          <View style={{height: 30}} />
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
            <Image
              source={require('../assets/Pr.png')}
              style={{
                width: 64,
                height: 64,
              }}
            />
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

          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: '#fff',
              textAlign: 'center',
              // paddingHorizontal: '10%',
            }}>
            Upgrade to Premium Now
          </Text>
          <View style={{height: 10}} />

          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#A1A1AC',
              textAlign: 'center',
              // paddingHorizontal: '10%',
            }}>
            Access all servers worldwide, fast and powerful
          </Text>
          <View style={{height: 20}} />
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Image
              source={require('../assets/Map2.png')}
              style={{
                width: 315,
                height: 150,
              }}
            />

            <View style={{height: 10}} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              {Array.from({length: 3}).map((_, index) => renderBox(index))}
            </View>
            {/* <View style={{height: 10}} /> */}


            <View
                  style={{
                    width: '100%',
                    height: 64,
                    // backgroundColor: 'rgba(46, 46, 61, 0.5)',
                    // borderWidth: 1,
                    // borderColor: '#202023',
                    marginTop: 10,
                    borderRadius: 20,
                    // padding: 12,
                    justifyContent:"center"
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
                          height: 48,
                          width: 48,
                          borderRadius: 16,
                          backgroundColor: '#171B2E',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../assets/No.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          marginLeft: 15,
                        }}>
                            <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                          No Ads
                        </Text>
                           
                        <View style={{height: 5}} />

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 2,
                          }}>
                          Enjoy surfing without annoying ads 
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 64,
                    // backgroundColor: 'rgba(46, 46, 61, 0.5)',
                    // borderWidth: 1,
                    // borderColor: '#202023',
                    // marginTop: 5,
                    borderRadius: 20,
                    // padding: 12,
                    justifyContent:"center"
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
                          height: 48,
                          width: 48,
                          borderRadius: 16,
                          backgroundColor: '#171B2E',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../assets/Al.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          marginLeft: 15,
                        }}>
                            <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                         Fast
                        </Text>
                           
                        <View style={{height: 5}} />

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 2,
                          }}>
                         Increase connection speed
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 64,
                    // backgroundColor: 'rgba(46, 46, 61, 0.5)',
                    // borderWidth: 1,
                    // borderColor: '#202023',
                    // marginTop: 10,
                    borderRadius: 20,
                    // padding: 12,
                    justifyContent:"center"
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
                          height: 48,
                          width: 48,
                          borderRadius: 16,
                          backgroundColor: '#171B2E',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../assets/globe.png')}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          justifyContent: 'center',
                          marginLeft: 15,
                        }}>
                            <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                    All Servers
                        </Text>
                           
                        <View style={{height: 5}} />

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 2,
                          }}>
                       Access all server worldwide
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                <View style={{height: 10}} />


                <Pressable
              style={{
                width: 327,
              }}
              onPress={() => {
                navigation.navigate('Serverlist');
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
              Upgrade to Premium Now
                </Text>
              
              </ImageBackground>
            </Pressable>

            <View style={{height: 24}} />


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
