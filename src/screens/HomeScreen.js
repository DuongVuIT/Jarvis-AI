import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '@components/features';
export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <SafeAreaView style={{flex: 1, marginLeft: 5, marginRight: 5}}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
          }}>
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
