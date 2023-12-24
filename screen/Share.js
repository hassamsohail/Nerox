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

export default function Share({navigation}) {
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
              Share
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
            source={require('../assets/Share.png')}
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
              fontSize: 18,
              fontWeight: '400',
              color: '#fff',
              textAlign: 'center',
              paddingHorizontal: '10%',
            }}>
            Refer to your friends & Get extra days of Subscription
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/whatsapp.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Whatsapp
                </Text>
              </View>
            </Pressable>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/instagram.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Instagram
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/facebook1.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Facebook
                </Text>
              </View>
            </Pressable>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/telegram.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Telegram
                </Text>
              </View>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/slack.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Slack
                </Text>
              </View>
            </Pressable>
            <Pressable>
              <View
                style={{
                  height: 152,
                  marginVertical: 10,
                  width: 152,
                  borderRadius: 16,
                  backgroundColor: '#3A3A4D',
                  borderWidth: 1,
                  borderColor: '#4A4A61',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../assets/twitter.png')}
                  style={{
                    width: 48,
                    height: 48,
                  }}
                />
                <View style={{height: 5}} />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    color: '#fff',
                    textAlign: 'center',
                    // paddingHorizontal: '10%',
                  }}>
                  Twitter
                </Text>
              </View>
            </Pressable>
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
