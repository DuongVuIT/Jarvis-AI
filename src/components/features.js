import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Features() {
  return (
    <SafeAreaView style={{height: hp(60)}}>
      <Text style={{fontSize: wp(6.5), color: 'black', marginBottom: 10}}>
        Features
      </Text>
      <View
        style={{
          backgroundColor: '#b3ffb3',
          borderRadius: 10,
          marginTop: 5,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(4), width: hp(4), marginLeft: 5, marginTop: 5}}
            source={require('@assets/images/chatgptIcon.png')}
          />
          <Text
            style={{
              fontSize: wp(5.0),
              textAlign: 'center',
              marginTop: 5,
              marginLeft: 5,
              color: 'black',
            }}>
            ChatGPT
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: wp(3.6),
            margin: 12,
            color: 'black',
          }}>
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ff66ff',
          borderRadius: 10,
          marginTop: 5,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(4), width: hp(4), marginLeft: 5, marginTop: 5}}
            source={require('@assets/images/dalleIcon.png')}
          />
          <Text
            style={{
              fontSize: wp(5.0),
              textAlign: 'center',
              marginTop: 5,
              marginLeft: 5,
              color: 'black',
            }}>
            DALL-E
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: wp(3.6),
            margin: 12,
            color: 'black',
          }}>
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#00ffff',
          borderRadius: 10,
          marginTop: 5,
          marginBottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(4), width: hp(4), marginLeft: 5, marginTop: 5}}
            source={require('@assets/images/smartaiIcon.png')}
          />
          <Text
            style={{
              fontSize: wp(5.0),
              textAlign: 'center',
              marginTop: 5,
              marginLeft: 5,
              color: 'black',
            }}>
            SmartAI
          </Text>
        </View>
        <Text
          style={{
            textAlign: 'justify',
            fontSize: wp(3.6),
            margin: 12,
            color: 'black',
          }}>
          A powerful voice assistant with ChatGPT and Dall-E capabilities,
          giving you the best of both worlds. Let experience it with me.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
