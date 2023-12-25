import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import Onboarding from './screen/Onboarding';
import Login from './screen/Login';
import CreateAccount from './screen/CreateAccount';
import ForgetPassword from './screen/ForgetPassword';
import OtpVerification from './screen/OtpVerification';
import MainScreen from './screen/MainScreen';
import Account from './screen/Account';
import SplitTunneling from './screen/SplitTunneling';
import Protocol from './screen/Protocol';
import Setting from './screen/Setting';
import Faq from './screen/Faq';
import Share from './screen/Share';
import Subscription from './screen/Subscription';
import Term from './screen/Term';
import PrivacyPolicy from './screen/PrivacyPolicy';
import About from './screen/About';
import FaqDetail from './screen/FaqDetail';
import Feedback from './screen/Feedback';
import FeedbackDetail from './screen/Feedbackdetail';
import ConnectionReport from './screen/ConnectionReport';
import Serverlist from './screen/Serverlist';
import Location from './screen/Location';

const Stack = createNativeStackNavigator();
const SplashScreenComponent = () => {
  return (
    <ImageBackground
   
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'cover',
      }}
      source={require('./assets/Splash.png')}
      >
      <Image
        source={require('./assets/Logo.png')}
        style={styles.splashImage}
     
      />
       <Image
        source={require('./assets/LGText.png')}
        style={styles.LGText}
     
      />
      <Text
      style={{
        fontWeight:"200",
        fontSize:14, color:"#A1A1AC", marginTop:4
      }}
      >
      Best VPN App
      </Text>
    </ImageBackground>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {showSplash ? (
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenComponent}
              options={{
                headerShown: false,
              }}
            />
          ) : null}
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Onboarding"
            component={Onboarding}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={Login}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="CreateAccount"
            component={CreateAccount}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="ForgetPassword"
            component={ForgetPassword}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="OtpVerification"
            component={OtpVerification}
          />
              <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="MainScreen"
            component={MainScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Account"
            component={Account}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="SplitTunneling"
            component={SplitTunneling}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Protocol"
            component={Protocol}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Setting"
            component={Setting}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Faq"
            component={Faq}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Share"
            component={Share}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Subscription"
            component={Subscription}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Term"
            component={Term}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="PrivacyPolicy"
            component={PrivacyPolicy}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="About"
            component={About}
          />
            <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="FaqDetail"
            component={FaqDetail}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Feedback"
            component={Feedback}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="FeedbackDetail"
            component={FeedbackDetail}
          />
             <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="ConnectionReport"
            component={ConnectionReport}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Serverlist"
            component={Serverlist}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            
            name="Location"
            component={Location}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  splashImage: {
    width:302,
    alignSelf: 'center',
    height: 216,
  },
  LGText: {
    width:120,
    alignSelf: 'center',
    height: 39,
    marginTop:6
  },
});

export default App;
