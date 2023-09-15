import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '@components/features';
export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="justify-center flex-row">
          <Image
            style={{height: hp(15), width: hp(15)}}
            source={require('@assets/images/bot.png')}
          />
        </View>
        {<Features />}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
