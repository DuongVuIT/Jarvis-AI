import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function WelcomeScreen() {
  // const [message, setMessage] = useState([]);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#ffffff',
      }}>
      <View>
        <Text
          style={{
            fontSize: wp(10),
            textAlign: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}>
          Jarvis
        </Text>
        <Text style={{fontSize: wp(4), textAlign: 'center', color: 'black'}}>
          The Future is here, powered by AI
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: wp(75), width: wp(75)}}
          source={require('@assets/images/welcome.png')}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#006600',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: 220,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{
            fontSize: wp(6),
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
          Get started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
