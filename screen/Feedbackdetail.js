import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function FeedbackDetail({navigation, route}) {
  const {title, text1, text2} = route.params;
  const [Email, setEmail] = React.useState('Ujalaak238@gmail.com');
  const [Subject, setSubject] = React.useState('');
  const [Description, setdescription] = React.useState('');

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
            width: '90%',
            // height:"100%",
            alignSelf: 'center',
          }}>
          <View style={{height: 20}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',

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
              Submit Feedback
            </Text>
            <Pressable>
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

          <TextInput
            label="Subject"
            value={title}
            onChangeText={Subject => setSubject(Subject)}
            style={{
              backgroundColor: 'rgba(58, 58, 77, 0.3)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderRadius: 10,
            }}
            underlineColor="transparent" // Active border color
            underlineColorAndroid="rgba(58, 58, 77, 0.3)"
            selectionColor="#5B7905" // Set selection color
            activeUnderlineColor="#5B7905"
            outlineColor="rgba(58, 58, 77, 0.3)"
            textColor="#fff"
          />
          <View style={{height: 15}} />

          <TextInput
            label="Subject"
            value={Email}
            onChangeText={Email => setEmail(Email)}
            style={{
              backgroundColor: 'rgba(58, 58, 77, 0.3)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderRadius: 10,
            }}
            underlineColor="transparent" // Active border color
            underlineColorAndroid="rgba(58, 58, 77, 0.3)"
            selectionColor="#5B7905" // Set selection color
            activeUnderlineColor="#5B7905"
            outlineColor="rgba(58, 58, 77, 0.3)"
            textColor="#fff"
          />
          <View style={{height: 15}} />

          <TextInput
            label="Description"
            value={text1}
            onChangeText={Description => setdescription(Description)}
            style={{
              backgroundColor: 'rgba(58, 58, 77, 0.3)',
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderRadius: 10,
            }}
            underlineColor="transparent" // Active border color
            underlineColorAndroid="rgba(58, 58, 77, 0.3)"
            selectionColor="#5B7905" // Set selection color
            activeUnderlineColor="#5B7905"
            outlineColor="rgba(58, 58, 77, 0.3)"
            textColor="#fff"
            multiline={true} // Enable multiline
            numberOfLines={5} // Set an initial number of lines
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#fff',
              textAlign: 'center',
            }}>
            Your privacy is our top priority. These feedback do
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#fff',
              textAlign: 'center',
            }}>
            not contain any personal identifiable information.
          </Text>
          <View style={{height: 15}} />

          <Pressable
            style={{
              width: 327,
              alignSelf:"center"
            }}
            onPress={() => {
              navigation.navigate('Feedback');
            }}>
            <ImageBackground
              source={require('../assets/Button.png')}
              style={{
                width: '100%',
                height: 56,

                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
            Submit
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
    height: 40,
    //   marginLeft: 20,
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
