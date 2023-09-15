import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Features() {
  return (
    <SafeAreaView style={{height: hp(60)}}>
      <Text style={{fontSize: wp(6.5)}}>Features</Text>
      <View style={{backgroundColor: '#b3ffb3', borderRadius: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(4), width: hp(4)}}
            source={require('@assets/images/chatgptIcon.png')}
          />
          <Text
            style={{
              fontSize: wp(4.8),
              textAlign: 'center',
              marginTop: 5,
              marginLeft: 5,
            }}>
            ChatGPT
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: wp(3.8),
            margin: 10,
          }}>
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
