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

export default function ConnectionReport({navigation}) {
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
              Connection Report
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
            source={require('../assets/Connection.png')}
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
              fontWeight: '400',
              color: '#fff',
              textAlign: 'center',
              paddingHorizontal: '10%',
            }}>
            This is a summary of information from using NEROX while connected
          </Text>

         
<View

style={{
    width:"90%", alignSelf:"center"
}}
>
<View style={{height: 10}} />


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
                          source={require('../assets/Loc.png')}
                          style={{
                            width: 32,
                            height: 32,
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
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 4,
                          }}>
                          Location
                        </Text>
                        <View style={{height: 5}} />


                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                          United States - Miami
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                {/* <View style={{height: 10}} /> */}


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
                          source={require('../assets/Ip.png')}
                          style={{
                            width: 32,
                            height: 32,
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
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 4,
                          }}>
                          IP Address
                        </Text>
                        <View style={{height: 5}} />


                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                          37.120.202.186
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                {/* <View style={{height: 10}} /> */}


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
                          source={require('../assets/Du.png')}
                          style={{
                            width: 32,
                            height: 32,
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
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 4,
                          }}>
                          Duration
                        </Text>
                        <View style={{height: 5}} />


                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                         01:32:54
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
                </View>
                {/* <View style={{height: 10}} /> */}


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
                          source={require('../assets/Da.png')}
                          style={{
                            width: 32,
                            height: 32,
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
                            fontSize: 12,
                            fontWeight: '100',
                            color: '#A1A1AC',
                            marginTop: 4,
                          }}>
                          Data Used
                        </Text>
                        <View style={{height: 5}} />


                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: '400',
                            color: '#fff',
                          }}>
                        687 MB
                        </Text>

                       
                      </View>
                    </View>
                    
                  </View>
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
