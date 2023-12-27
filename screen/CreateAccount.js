import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';

export default function CreateAccount({navigation}) {
  const [Email, setEmail] = React.useState('');
  const [FullName, setFullName] = React.useState('');

  const [Password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ScrollView>
      <View
        style={{
          height: Dimensions.get('window').height,
          backgroundColor: '#00091F',
        }}>
        <View
          style={{
            width: 327,
            alignSelf: 'center',
          }}>
          <View style={{height: 20}} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
              height: 40,
            }}>
            <Pressable>
              <View
                style={{
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 12,
                  backgroundColor: 'rgba(58, 58, 77, 0.3)',
                }}>
                <Image
                  source={require('../assets/Cross.png')}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
            </Pressable>
          </View>
          <View style={{height: 20}} />
          <Text
            style={{
              fontSize: 32,
              fontWeight: '400',
              color: '#fff',
            }}>
            Create Account
          </Text>
          <View style={{height: 5}} />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#A1A1AC',
            }}>
            Create account and enjoy 7 day free trial
          </Text>

          <View style={{height: 60}} />
          <TextInput
            label="Full Name"
            value={FullName}
            onChangeText={FullName => setFullName(FullName)}
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
            label="Email Address"
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
            label="Password"
            value={Password}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={({size, color}) => (
                  <Entypo
                    name={showPassword ? 'eye-with-line' : 'eye'}
                    size={size}
                    color={color}
                  />
                )}
                onPress={togglePasswordVisibility}
              />
            }
            // right={<TextInput.Icon icon="eye" />}
            onChangeText={Password => setPassword(Password)}
            style={{
              backgroundColor: 'rgba(58, 58, 77, 0.3)',
              borderWidth: 1,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              borderRadius: 10,
              borderColor: 'rgba(58, 58, 77, 0.3)',
            }}
            underlineColor="transparent" // Active border color
            underlineColorAndroid="rgba(58, 58, 77, 0.3)"
            selectionColor="#5B7905" // Set selection color
            activeUnderlineColor="#5B7905"
            outlineColor="rgba(58, 58, 77, 0.3)"
            textColor="#fff"
            underlineStyle={{
              borderColor: '#fff',
            }}
          />
          <View style={{height: 100}} />

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
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Sign Up
              </Text>
            </ImageBackground>
          </Pressable>
          <View style={{height: 20}} />
          <Pressable
            style={{
              width: 327,
            }}
            onPress={() => {
              navigation.navigate('MainScreen');
            }}>
            <ImageBackground
              source={require('../assets/Googlebtn.png')}
              style={{
                width: '97%',
                height: 52.5,

                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}></ImageBackground>
          </Pressable>
          <View style={{height: 20}} />
          <Pressable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: '200',
                  textAlign: 'center',
                }}>
                Have an Account?
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#6B8F04',
                  fontWeight: '200',
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Sign In
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
