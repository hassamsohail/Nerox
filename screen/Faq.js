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
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you're using FontAwesome, you can change it to your desired icon library

export default function Faq({navigation}) {
  const tabs = ['Connection', 'Login', 'Payment', 'Premium']; // Add your tab names here
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = index => {
    setActiveTab(index);
    // Add logic to handle tab press, such as changing content based on the selected tab
  };
  const data = [
    {
      key: '1',
      text: 'Why i need a VPN?',
      imageSource: require('../assets/Right.png'),
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
    },
    {
      key: '2',
      text: 'Is it safe?',
      imageSource: require('../assets/Right.png'),
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
    },
    {
      key: '3',
      text: 'How to use NEROX',
      imageSource: require('../assets/Right.png'),
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
    },

    {
      key: '4',
      text: 'Can’t connect, not stable or speed is slow',
      imageSource: require('../assets/Right.png'),
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
    },
    {
      key: '5',
      text: 'How to switch server location?',
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
      imageSource: require('../assets/Right.png'),
    },
    {
      key: '6',
      text: 'Don’t have authority / Can’t press OK to access website/apps?',
      text1:
        'When NEROX is connecting it presents a VPN dialog for the user to give permission to start the VPN. ',
      text2:
        'If you cannot click OK or check the "I trust this application checkbox," there might be another app on top of the dialog. To avoid this problem, close all apps that may be running in the background.',
      imageSource: require('../assets/Right.png'),
    },
  ];

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
              FAQ
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
            <Icon name="search" size={20} color="#A1A1AC" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search for keywords..."
              placeholderTextColor="#A1A1AC"
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabBarContainer}>
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTabPress(index)}
                style={[
                  styles.tab,
                  {
                    backgroundColor:
                      activeTab === index ? '#32342C' : '#171B2E',
                  },
                  {borderColor: activeTab === index ? '#A4D616' : '#4A4A61'},
                  {
                    
                  }
                ]}>
                <Text style={[

                  styles.tabText,
                  {
                    color: activeTab === index? "#6B8F04":"#ABABB1"
                  }
                ]
                  
                
                }>{tab}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={{height: 20}} />

          <View
            style={{
              width: '100%',
              backgroundColor: '#171B2E',
              paddingTop: 15,
            }}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              {data.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate('FaqDetail', {
                      title: item.text,
                      text1: item.text1,
                      text2: item.text2,
                    });
                  }}>
                  <View key={index}>
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
                        {item.text}
                      </Text>

                      <Image
                        source={item.imageSource}
                        style={{
                          width: 24,
                          height: 24,
                          opacity: 0.5,
                        }}
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

                    <View style={{height: 15}} />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={{height: 24}} />

          <Pressable
          onPress={()=>{
            navigation.navigate("Feedback")
          }}
          >
            <Image
              source={require('../assets/More.png')}
              style={{
                width: 48,
                alignSelf: 'center',
                height: 48,
                // opacity:0.5
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: '200',
                color: '#fff',
                textAlign: 'center',
              }}>
              More questions?
            </Text>
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
