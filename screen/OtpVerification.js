import React, {useState, useEffect, useRef} from 'react';

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
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function OtpVerification({navigation}) {
  const [otpFields, setOtpFields] = useState(
    Array.from({length: 4}, (_, index) => ({
      id: index,
      value: '',
    })),
  );

  const [resendDisabled, setResendDisabled] = useState(true);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    let timer;

    if (countdown > 0 && resendDisabled) {
      timer = setInterval(() => {
        setCountdown(prevCount => prevCount - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [countdown, resendDisabled]);

  // Create an array of refs to store references to input fields
  const inputRefs = Array.from({length: 6}, () => useRef());
  const handleOTPChange = (text, fieldId) => {
    // Handle OTP field changes here
    const updatedFields = [...otpFields];
    updatedFields[fieldId].value = text;
    setOtpFields(updatedFields);
  
    // Move the cursor to the next input field
    if (fieldId < 3 && text.length === 1 && inputRefs[fieldId + 1] && inputRefs[fieldId + 1].current) {
      inputRefs[fieldId + 1].current.focus();
    }
  };

  const handleResendClick = () => {
    // Implement logic to resend OTP here
    setResendDisabled(true);
    setCountdown(30); // Reset countdown timer
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
              justifyContent: 'flex-start',
              alignItems: 'center',
              width: '100%',
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
                  backgroundColor: 'rgba(58, 58, 77, 0.3)',
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
          </View>
          <View style={{height: 20}} />
          <Text
            style={{
              fontSize: 32,
              fontWeight: '400',
              color: '#fff',
            }}>
            Verification
          </Text>
          <View style={{height: 5}} />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#A1A1AC',
            }}>
            We have sent the OTP code to the email
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              color: '#FFFFFF',
            }}>
            jacksondavid@gmail.com
          </Text>
          <View style={{height: 60}} />

          <View style={styles.otpContainer}>
            {otpFields.map((field, index) => (
              <TextInput
                key={field.id}
                style={styles.otpInput}
                onChangeText={text => handleOTPChange(text, index)}
                value={field.value}
                maxLength={1}
                keyboardType="numeric"
                ref={inputRefs[index]} // Assign the ref to the input field
              />
            ))}
          </View>

          <View style={{height: 40}} />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#A1A1AC',
              textAlign: 'center',
            }}>
            {resendDisabled
              ? `Resend Code in 00:${
                  countdown < 10 ? `0${countdown}` : countdown
                }`
              : 'Didn’t receive code?'}
          </Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={handleResendClick}
            disabled={resendDisabled}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: resendDisabled ? '#A1A1AC' : '#EB445A',
                textAlign: 'center',
              }}>
              Resend OTP
            </Text>
          </TouchableOpacity>
          <View style={{height: 15}} />

          <View style={{height: 60}} />
          <Pressable
            style={{
              width: 327,
            }}
            onPress={() => {
              navigation.navigate('OtpVerification');
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
                Send Otp
              </Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  loginDescription1: {
    fontSize: 24,
    color: '#0E0E0E',
    fontWeight: '600',
  },
  loginDescription: {
    fontSize: 13,
    color: '#827F8A',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  otpInput: {
    width: 64,
    color: '#fff',
    height: 64,
    backgroundColor: 'rgba(58, 58, 77, 0.3)', // Customize the border color here
    borderRadius: 8,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
