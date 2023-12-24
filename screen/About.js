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

export default function PrivacyPolicy({navigation}) {
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
              About
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
          <View style={{height: 100}} />

          <Image
            source={require('../assets/Logo2.png')}
            style={{
              width: 100,
              height: 171,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#ABABB1',
              textAlign: 'center',
            }}>
            Version 1.0.0
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#ABABB1',
              textAlign: 'center',
            }}>
            Build 12249801301
          </Text>

          <View style={{height: 250}} />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#ABABB1',
              textAlign: 'center',
            }}>
            www.NEROX.com
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#ABABB1',
              textAlign: 'center',
            }}>
            Copyright 2023 All Rights Reserved
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
