import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome, you can change it to your desired icon library

export default function Serverlist({navigation}) {
  const data = [
    {
      key: '1',
      country: 'Germany',
      flag: require('../assets/DE.png'),
      icon: require('../assets/2CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    {
      key: '2',
      country: 'Australia',
      flag: require('../assets/AU.png'),
      icon: require('../assets/1CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    {
      key: '3',
      country: 'India',
      flag: require('../assets/IN.png'),
      icon: require('../assets/3CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    {
      key: '4',
      country: 'Canada',
      flag: require('../assets/CA.png'),
      icon: require('../assets/2CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    {
      key: '5',
      country: 'Russia',
      flag: require('../assets/FR.png'),
      icon: require('../assets/2CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    {
      key: '6',
      country: 'Unided kingdom',
      flag: require('../assets/GB.png'),
      icon: require('../assets/1CL.png'),
      arrowIcon: require('../assets/down.png'),
    },
    
    // Add more data items as needed
  ];
  const renderItem = ({item}) => (
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
            source={item.flag}
            style={{
              width: 28,
              height: 20,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#747277',
              marginLeft: 10,
            }}>
            {item.country}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.icon}
            style={{
              width: 22,
              height: 22,
            }}
          />
          <Image
            source={item.arrowIcon}
            style={{
              width: 24,
              marginLeft: 20,
              height: 23,
            }}
          />
        </View>
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
  );

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
              Server list
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

          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search location"
              placeholderTextColor="#F0F0F0"
            />
            <Icon name="search" size={20} color="#A1A1AC" style={styles.icon} />
          </View>
          <View style={{height: 20}} />

          <View
            style={{
              alignSelf: 'center',
              width: '90%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#fff',
                }}>
                Free Server
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#6B8F04',
                }}>
                See All
              </Text>
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
                    source={require('../assets/US.png')}
                    style={{
                      width: 28,
                      // alignSelf: 'center',
                      height: 20,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#747277',
                      marginLeft: 10,
                    }}>
                    United States
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/3CL.png')}
                    style={{
                      width: 22,
                      // alignSelf: 'center',
                      height: 22,
                      // opacity:0.5
                    }}
                  />
                  <Image
                    source={require('../assets/down.png')}
                    style={{
                      width: 24,
                      marginLeft: 20,
                      // alignSelf: 'center',
                      height: 23,
                      // opacity:0.5
                    }}
                  />
                </View>
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
                    source={require('../assets/FR.png')}
                    style={{
                      width: 28,
                      // alignSelf: 'center',
                      height: 20,
                      // opacity:0.5
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: '#747277',
                      marginLeft: 10,
                    }}>
                    France
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../assets/1CL.png')}
                    style={{
                      width: 22,
                      // alignSelf: 'center',
                      height: 22,
                      // opacity:0.5
                    }}
                  />
                  <Image
                    source={require('../assets/down.png')}
                    style={{
                      width: 24,
                      marginLeft: 20,
                      // alignSelf: 'center',
                      height: 23,
                      // opacity:0.5
                    }}
                  />
                </View>
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
            <View style={{height: 10}} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#fff',
                }}>
                All Server
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '400',
                  color: '#6B8F04',
                }}>
                See All
              </Text>
            </View>

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </View>
        </View>
          <View
          style={{
            position:"absolute", bottom:8, alignSelf:"center"
          }}
          >

         
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

    backgroundColor: '#232026',
    borderRadius: 25,
    paddingHorizontal: 16,
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
